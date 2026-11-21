# Bytebase Agent Identity Infrastructure

## Identity Infrastructure Specification — v0.1

**Status:** Proposed MVP Architecture  
**Product:** Bytebase  
**Related Product:** Bytebank  
**Companion Document:** [Bytebank_PRD_v0.2.md](file:///home/ai-apostle/Projects/bytebank/Bytebank_PRD_v0.2.md)  
**Technical Architecture:** [techstack.md](file:///home/ai-apostle/Projects/bytebank/techstack.md)  
**Purpose:** Define how AI agents are registered, assigned persistent identities, authenticated, resolved, and attributed to actions.

---

## 1. Overview

Bytebase is the canonical agent identity and registration infrastructure used by Bytebank and external services requiring reliable AI agent identification.

Its primary purpose is to deterministically answer:
- Which agent is this?
- What is its registered identity?
- Which Byte Network is it registered under?
- Is its identity currently active?
- Did a request present a valid credential associated with that identity?
- Which registered agent identity was associated with an action?

Bytebase is **not primarily a human identity-verification system**. It identifies agents and supports attribution of actions to registered agent identities.

It does not, by registration alone, establish that an agent's human controller is trustworthy, that the agent is safe or bug-free, or that a financial transaction is legally or commercially eligible.

### 1.1 Product Boundaries

- **Bytebase** owns the canonical agent identity registry, registration lifecycle, identity resolution, and agent credential relationships.
- **Bytebank** owns financial accounts, payment authorization, financial transaction records, and financial compliance checks.
- **Stellar** is Bytebank's initial blockchain execution network. Bytebase identity remains completely independent of Stellar.

> [!IMPORTANT]
> A Bytebank account must be linked to a valid Bytebase Agent ID before it is provisioned for an agent.

---

## 2. Core Concepts

### 2.1 Byte Network

A **Byte Network** is a named identity namespace within Bytebase in which agents are registered.

- An agent has one primary Byte Network at registration.
- The network is part of its identity context, not a separate blockchain or database.
- For the MVP, Byte Networks are logical registry entities managed within a single Bytebase service and database. They are not implemented as dozens of independently operated physical infrastructures.
- The meaning and governance of each Byte Network must be explicit. A network may represent an issuer, ecosystem, organization, community, or policy domain.
- A network should never be created merely to inflate numbers.

### 2.2 Agent Residence

**Agent Residence** is the agent's permanent registration within its primary Byte Network.

- It is an identity construct, not a physical or geographic address.
- It records where the agent was originally registered and under which network's identity context it belongs.
- An agent's primary residence does not change casually. If migration or network re-assignment is supported later, it must be an explicit, auditable operation that preserves the canonical identity.

### 2.3 Bytebase Agent ID

The **Bytebase Agent ID** is the unique, persistent identifier assigned to an agent's canonical identity record.

It is the stable reference used by Bytebase, Bytebank, and integrated third-party services to refer to that agent.

Key characteristics:
- Globally unique within Bytebase.
- Remains stable when the agent changes models, frameworks, hosting providers, or runtime environments.
- Remains stable when authentication keys or credentials are rotated.
- Resolves to exactly one canonical identity record.
- Safe to share publicly as an identifier; it is not a secret, password, or bearer token.
- Not freely transferable between unrelated agents.

*Note:* Conceptually similar to a unique digital identity object, but the MVP does **not** require an on-chain NFT or transferable token. A registry-backed identifier with cryptographic credentials is the foundation.

### 2.4 Agent Credentials

Credentials are the cryptographic mechanisms by which an agent (or its hosting integration) proves control over an identity.

- An Agent ID identifies an agent. A credential helps authenticate that an incoming request is submitted by an entity controlling a registered key for that agent.
- Credentials can be replaced, rotated, suspended, or revoked without modifying the canonical Agent ID.

### 2.5 Controller and Developer Relationships

Bytebase records which individual, organization, or developer account created or manages an agent.

- These relationships support administrative oversight and lifecycle management.
- They do not, by themselves, mean Bytebase has performed KYC or verified the human's personal trustworthiness. Any human verification or financial underwriting belongs to a separate process operated by the relevant service (e.g., Bytebank).

### 2.6 Bytecript (The Agent's Digital ID Card)

**Bytecript** is the cryptographic digital identity card and credential token held by an agent.

- **Conceptual Role:** If the Bytebase Agent ID is the agent's persistent registration number, **Bytecript** is the verifiable "ID card / passport" that the agent carries and presents across networks and relying parties.
- **Contents & Cryptographic Claims:** A Bytecript bundles the agent's verifiable claims:
  - Canonical Bytebase Agent ID
  - Human-readable name and metadata
  - Primary Byte Network and Agent Residence
  - Bound public key references and signature algorithms
  - Current identity lifecycle status (`active`, `suspended`, etc.)
  - Issuance timestamp, version, and controller reference
- **Presentation & Proof of Control:** When interacting with relying parties (such as Bytebank, external marketplaces, or third-party APIs), the agent presents its Bytecript claims alongside a fresh cryptographic signature over a challenge nonce, proving current possession of the bound private key.
- **UI & Portal Presentation:** In human and developer interfaces, the Bytecript is rendered as an authoritative, institutional-grade digital credential card featuring cryptographic verification indicators, monospace fingerprints, and real-time status pills.
- **Non-Transferability:** A Bytecript is bound to that specific agent identity and controller relationship; it is not a transferable trading card or speculative NFT.

---

## 3. Identity Lifecycle

The identity lifecycle is explicit, auditable, and immutable in event history.

| State | Meaning | Permitted Operations |
| :--- | :--- | :--- |
| `pending` | Registration initiated but pending controller approval or requirements | Cannot authenticate; cannot execute financial actions |
| `active` | Identity is fully registered and verified; valid credentials bound | May authenticate and request permitted services |
| `suspended` | Temporarily disabled by controller or system policy | Relying services must reject or restrict new activity |
| `revoked` | Identity is permanently invalidated for normal operational use | Authentication permanently disabled; historical records preserved |
| `compromised` | A security incident or leaked key reported; strict restrictions apply | Immediate rejection of all incoming signature challenges |

### Lifecycle Rules:
1. **No Silent Deletion:** Identity records are never deleted from PostgreSQL, ensuring downstream services can reliably attribute historical actions.
2. **Downstream Autonomy:** A relying service like Bytebank defines what a status means for its own capabilities (e.g., freezing transfers on `suspended`).
3. **Immutability of Prior Settlements:** Revoking an identity does not reverse or invalidate transactions already finalized on a blockchain.

---

## 4. Registration Workflows

Bytebase supports multiple registration paths that converge on the same canonical identity schema:

### 4.1 Human-Initiated Registration
A person creates and registers an agent through the Bytebase / Bytebank web dashboard.

### 4.2 Developer- or Organization-Initiated Registration
A developer or organization registers agents programmatically via REST API or bulk dashboard upload, providing required metadata and public credential material.

### 4.3 Agent-Initiated Registration
An autonomous agent requests registration programmatically through an approved API integration. Depending on network policy, this creates a `pending` identity requiring controller approval.

### 4.4 Canonical Registration Workflow

```
[Requester (Human/Dev/Agent)] 
       |
       v (1. Submit Registration Payload + Public Key)
[Bytebase Registration Service]
       |
       +---> (2. Validate fields & namespace uniqueness)
       +---> (3. Assign Primary Byte Network & Agent Residence)
       +---> (4. Bind Initial Cryptographic Credential / Public Key)
       +---> (5. Generate Unique Stable Bytebase Agent ID)
       +---> (6. Persist Canonical Record & Append Audit Event)
       |
       v (7. Return Agent ID, Credential Setup & Bytecript Digital ID Card)
[Active Agent Identity & Bytecript]
```

---

## 5. Logical Identity Data Model

```
+-----------------------------------+         +-----------------------------------+
|            Byte Network           |         |          Agent Residence          |
+-----------------------------------+         +-----------------------------------+
| network_id (PK)                   | 1     1 | residence_id (PK)                 |
| network_name                      |<------->| agent_id (FK -> Agent Identity)   |
| namespace_identifier              |         | network_id (FK -> Byte Network)   |
| description                       |         | registration_timestamp            |
| issuer_operator                   |         | residence_status                  |
| network_status                    |         +-----------------------------------+
| registration_policy               |
+-----------------------------------+
                  ^
                  | 1
                  |
                  | *
+-----------------------------------+         +-----------------------------------+
|          Agent Identity           |         |            Credential             |
+-----------------------------------+         +-----------------------------------+
| id (PK)                           | 1     * | credential_id (PK)                |
| agent_id (Unique Indexed)         |<------->| agent_id (FK -> Agent Identity)   |
| display_name                      |         | public_key / key_reference        |
| description                       |         | algorithm (e.g. Ed25519)          |
| primary_network_id (FK)           |         | credential_status                 |
| residence_id (FK)                 |         | created_at / expires_at           |
| identity_status                   |         | revoked_at / revocation_reason    |
| created_at / activated_at         |         +-----------------------------------+
| public_metadata (JSONB)           |
| record_revision                   |
+-----------------------------------+
       | 1                     | 1
       |                       |
       | *                     | *
+--------------------------+  +-----------------------------------+
|  Controller Relationship |  |     Identity & Security Events    |
+--------------------------+  +-----------------------------------+
| relationship_id (PK)     |  | event_id (PK)                     |
| agent_id (FK)            |  | agent_id (FK)                     |
| controller_account_ref   |  | event_type                        |
| role (Owner, Dev, Admin) |  | actor_type & actor_id             |
| permissions (JSONB)      |  | payload (JSONB, sanitized)        |
| status                   |  | created_at                        |
+--------------------------+  +-----------------------------------+
```

---

## 6. Authentication and Proof of Possession

Knowing or presenting an Agent ID alone **never** authorizes an action.

### 6.1 Challenge-Response Authentication Protocol

```
Agent / Client                           Bytebase / Relying Service
      |                                              |
      | 1. POST /auth/challenge (agent_id, key_id)   |
      |--------------------------------------------->|
      |                                              | Generates short-lived nonce
      | 2. Returns Challenge (nonce, timestamp, aud) | (e.g., 60s TTL, bound to service)
      |<---------------------------------------------|
      |                                              |
      | Signs Challenge with Private Key             |
      |                                              |
      | 3. POST /auth/verify (signature, nonce, id)  |
      |--------------------------------------------->|
      |                                              | Verifies signature against 
      |                                              | registered Public Key.
      |                                              | Checks Agent & Credential status.
      | 4. Returns Auth Token / Verification Proof   |
      |<---------------------------------------------|
```

### 6.2 Key Management Standards
- **Private Key Hygiene:** Bytebase **never** stores private keys in plaintext.
- **Key Storage:** Keys reside in agent runtimes, controller-managed secure enclaves, or cloud KMS/HSM instances.
- **Rotation:** Adding or retiring credentials preserves the canonical Agent ID.
- **Replay Protection:** Nonces are single-use and expire within tight windows.

### 6.3 Authentication vs. Authorization

```
+---------------------------------------------------------------------------------+
| AUTHENTICATION (Bytebase Domain)                                                |
| "Which registered agent identity presented a cryptographically valid proof?"     |
+---------------------------------------------------------------------------------+
                                         |
                                         v
+---------------------------------------------------------------------------------+
| AUTHORIZATION (Bytebank / Relying Service Domain)                              |
| "Is this authenticated agent permitted to execute this specific action/payment?" |
+---------------------------------------------------------------------------------+
```

---

## 7. Identity Resolution and Public Lookup

Bytebase exposes public and authenticated resolution endpoints.

### Public Resolution Returns:
- Canonical `agent_id`
- Display Name & Public Description
- Primary Byte Network & Residence
- Identity Status (`ACTIVE`, `SUSPENDED`, etc.)
- Public Issuer / Registration Information

### Strictly Protected (Never Exposed in Lookup):
- Private keys, seed phrases, or cryptographic secrets
- Session tokens or authentication challenges
- Private controller personal information (KYC, email, legal identity)
- Financial balances, smart account spending limits, or ledger history
- Internal risk scores or fraud flags

---

## 8. Action Attribution

Bytebase empowers participating services to retain indisputable audit trails attributing operations to specific agent identities.

### 8.1 Evidence Established by Bytebase
When verified, the service can record:
- An operation presented a valid credential linked to `agent_id`.
- Proof passed verification at timestamp `T`.
- The request targeted service `S`.
- The service processed, approved, or rejected the action.

*Precise Terminology:*
- *"Authenticated as Bytebase Agent ID agent_01h8x..."*
- *"Action initiated through credential cred_77a... bound to Bytebase Agent ID agent_01h8x..."*

### 8.2 Limits of Attribution
Bytebase cannot prove:
- Which specific LLM or neural weights reasoned about an action.
- That the host runtime was not manipulated by a local process.
- The personal presence of the registered human controller.
- Actions taken by an agent outside participating Bytebase-integrated services.

---

## 9. Bytebank Integration

Bytebank treats Bytebase as its sole identity source of truth:

```
[Agent] ---> (1. Submit Agent ID) ---> [Bytebank Gateway]
                                             |
                                             v (2. Query Identity & Verify Proof)
                                       [Bytebase Registry]
                                             |
                                             v (3. Identity Valid & Active)
                                       [Bytebank Compliance & Policy]
                                             |
                                             v (4. Provision Smart Account)
                                       [Stellar / Soroban Account]
                                             |
                                             v (5. Link Account to Agent ID)
                                       [Bytebank Ledger]
```

1. **Account Provisioning:** Bytebank verifies that an Agent ID is active in Bytebase and validates proof of possession before provisioning a Stellar smart account.
2. **Payment Attribution:** Every financial transaction on Stellar retains an off-chain attribution link to the Bytebase Agent ID.
3. **Lifecycle Synchronization:** If Bytebase flags an agent as `SUSPENDED` or `COMPROMISED`, Bytebank immediately freezes agent-initiated payment execution.

---

## 10. Core API Capabilities (MVP)

| API Capability | Endpoint / Purpose | Access Level |
| :--- | :--- | :--- |
| `POST /api/v1/agents` | Register a new agent identity | Authenticated Controller / Dev |
| `GET /api/v1/agents/{id}` | Retrieve internal identity profile | Authenticated Controller / Service |
| `GET /api/v1/identity/resolve` | Public identity resolution by Agent ID | Public (Rate-limited) |
| `GET /api/v1/agents/{id}/bytecript` | Retrieve verified Bytecript digital credential payload | Public / Relying Service |
| `POST /api/v1/agents/{id}/credentials` | Bind new public key credential | Authenticated Controller |
| `POST /api/v1/auth/challenge` | Issue time-bound auth nonce | Public / Agent |
| `POST /api/v1/auth/verify` | Verify signed challenge | Public / Relying Service |
| `POST /api/v1/credentials/{id}/rotate` | Rotate existing credential | Authenticated Controller / Agent |
| `POST /api/v1/credentials/{id}/revoke` | Revoke compromised credential | Authenticated Controller |
| `PATCH /api/v1/agents/{id}/status` | Update status (`SUSPEND`, `REVOKE`) | Authenticated Controller / Admin |
| `GET /api/v1/events` | Stream / poll lifecycle change events | Service-to-Service (Bytebank) |

---

## 11. Core Security & Privacy Principles

1. **Agent IDs are identifiers, not secrets:** Safe to display publicly.
2. **Possession of an ID alone confers zero privileges:** Cryptographic signature required.
3. **Zero Plaintext Private Keys:** Stored in client runtimes or KMS/HSM only.
4. **Time & Audience Bound:** Replay-proof nonces with short TTLs.
5. **Stable Identity Across Key Changes:** Keys rotate; Agent ID remains unchanged.
6. **Immutable Audit Trails:** State changes are appended to event logs.
7. **Selective Public Disclosure:** Only approved public metadata returned in lookup.
8. **Separation of Concerns:** Financial balances remain in Bytebank; identity in Bytebase.
9. **Registration != Trust:** Registration does not guarantee agent safety or ethics.
10. **Precise Attribution:** Retain evidence matching actual cryptographic proofs.

---

## 12. Technical Architecture & Stack

- **API Layer:** Python + FastAPI (Async, Typed, OpenAPI 3.1)
- **Persistence:** PostgreSQL (Relational integrity, JSONB metadata, immutable audit logs)
- **Cryptography:** Cryptography library (`cryptography` / `ed25519`)
- **Key Protection:** Cloud KMS / HSM for platform signers
- **Workers:** Python background workers for event dispatching and maintenance
- **Developer Experience:** REST API, OpenAPI, TypeScript SDK, Docker packaging

---

## 13. Scope Boundaries

### In MVP Scope:
- Logical Byte Network registry.
- Agent registration (Dashboard + API).
- Agent Residence and stable Bytebase Agent ID.
- **Bytecript digital credential object and verifiable ID card UI.**
- Public key credential binding and verification.
- Challenge-response proof-of-possession authentication.
- Credential rotation and revocation.
- Full identity status lifecycle (`pending`, `active`, `suspended`, `revoked`, `compromised`).
- Immutable event logging.
- Authenticated integration with Bytebank and transaction attribution.

### Deferred Beyond MVP:
- Transferable on-chain NFTs for identity.
- Independent databases per Byte Network.
- Universal cross-internet activity monitoring.
- Subjective reputation or behavioral trust scores.
- Multi-party governance consensus for identity changes.
