# Bytebank & Bytebase — Tech Stack & Solution Approach

**Document Version:** 1.0  
**Status:** Architecture Baseline & Technical Specification  
**Product:** Bytebank (Financial Infrastructure for AI Agents) & Bytebase (Agent Identity Registry)  
**Execution Network:** Stellar Testnet / Soroban Smart Accounts  
**System Architecture:** Python-First Modular Monolith  

---

## 1. Executive Summary & Vision

Bytebank is financial infrastructure designed specifically for AI agents. It gives autonomous software actors persistent identities, programmable financial accounts, and the capability to send, receive, and manage funds while ensuring human principals, developers, and organizations retain strict ownership, deterministic policy enforcement, and auditability.

A fundamental architectural axiom of the platform is the **separation of identity from financial accounts**:
- **Bytebase** maintains the canonical **Agent ID** and cryptographic identity registry. Bytebase identity is independent of any single blockchain address, model provider, hosting infrastructure, or payment rail. See [identity.md](file:///home/ai-apostle/Projects/bytebank/identity.md) for the full identity specification.
- **Bytebank** manages the financial relationship, accounts, authorizations, transaction execution, and accounting. See [Bytebank_PRD_v0.2.md](file:///home/ai-apostle/Projects/bytebank/Bytebank_PRD_v0.2.md) for the product requirements.
- **Stellar & Soroban** serve as the initial on-chain execution and settlement layer for programmable smart accounts, multi-sig controls, and asset transfers.

---

## 2. Core Technology Stack

| Layer | Technology | Version / Tooling | Purpose & Architectural Justification |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **Next.js / React** | React 19, Next.js / Vite | High-performance dashboard, identity portal, and developer console. Strong server-side rendering and client-side interactivity isolation. |
| **Frontend Language** | **TypeScript** | TypeScript 5.x / 7.x | Strict type safety across financial forms, transaction states, and API contract consumption. |
| **Backend Framework** | **Python + FastAPI** | Python 3.12+, FastAPI, Pydantic v2 | High-throughput async REST APIs, automatic OpenAPI schema generation, typed data validation, and native compatibility with AI tooling. |
| **Primary Database** | **PostgreSQL** | PostgreSQL 16+ | ACID-compliant relational storage for identity records, controller hierarchies, spending policies, and immutable financial audit logs. |
| **Cache & Coordination** | **Redis** *(Optional initially)* | Redis 7+ | Session caching, distributed rate limiting, and task queues as concurrency demands scale. |
| **Background Processing**| **Python Workers** | Celery / ARQ / Asyncio Workers | Asynchronous blockchain transaction monitoring, event indexing, and outbound webhook delivery. |
| **API Documentation** | **OpenAPI / Swagger** | OpenAPI 3.1 (FastAPI native) | Machine-readable API contracts for agent discovery, client SDK generation, and developer documentation. |
| **Containerization** | **Docker & Compose** | Docker, Compose v2 | Uniform environment parity across local development, CI/CD pipelines, and cloud deployments. |

---

## 3. Blockchain and Financial Infrastructure

Bytebank uses Stellar as its foundational financial network and execution layer for the MVP. Stellar was chosen for its sub-5-second finality, negligible transaction fees, native multi-currency support, and Soroban smart contract framework.

| Technology | Purpose | Implementation Details |
| :--- | :--- | :--- |
| **Stellar (Testnet)** | Settlement Layer | Core money movement, testnet token distribution, and public ledger finality. |
| **Soroban** | Smart Contracts & Accounts | Programmable financial logic, account-level authorization rules, and signer validation. |
| **Stellar SDK** | Network Interaction | Python Stellar SDK (`stellar-sdk`) on the backend for Horizon/RPC communication, transaction construction, and signature envelope assembly. |
| **Stellar RPC & Horizon**| Node Interface | Querying ledger state, submitting transactions, and streaming ledger events. |
| **Stellar Smart Accounts** | Agent Financial Accounts | Non-custodial or sponsored smart account contracts deployed per agent, supporting configurable signers, thresholds, and execution conditions. |

### Architectural Boundary: Bytebase Identity vs. Stellar Financial Layer
- **No Address Equivalence:** An agent's identity is **never** defined by its Stellar public key (`G...` address). An address is merely a linked payment endpoint.
- **Multi-Account Extensibility:** A single Bytebase Agent ID can have multiple financial accounts across networks, asset classes, or payment rails over time.
- **Privacy by Design:** Identity lookups via Bytebase resolve to public metadata and verified payment destinations, never exposing underlying secret keys, controller KYC details, or internal private balances.

---

## 4. Identity and Security Infrastructure

AI models cannot be trusted to self-police their financial actions or enforce their own budgetary limits. Bytebank enforces all identity verification, cryptographic authentication, and spending policies **outside the model**.

```
+-----------------------------------------------------------------------------------+
|                                  BYTEBASE                                         |
|  - Stable Canonical Agent ID: `agent_01j7x4...`                                   |
|  - Bytecript: Digital ID Card & Verifiable Credential Token                       |
|  - Controller Relationship: Individual or Organization                            |
|  - Public Key Registry & Cryptographic Credentials                                |
|  - Lifecycle State: PENDING | ACTIVE | SUSPENDED | REVOKED | COMPROMISED         |
+-----------------------------------------------------------------------------------+
                                        | (Linked via Verified Relationship)
                                        v
+-----------------------------------------------------------------------------------+
|                                  BYTEBANK                                         |
|  - Deterministic Policy Engine (Spending Limits, Velocity, Whitelisted Rails)    |
|  - Financial Account Service (Stellar Smart Accounts)                             |
|  - Immutable PostgreSQL Audit Ledger (Attributable Financial Lifecycle)           |
+-----------------------------------------------------------------------------------+
                                        | (On-Chain Execution)
                                        v
+-----------------------------------------------------------------------------------+
|                              STELLAR / SOROBAN                                    |
|  - Soroban Smart Account Execution & Transfer Logic                               |
|  - Testnet Asset Movement & On-Chain Proofs                                       |
+-----------------------------------------------------------------------------------+
```

### Security Primitives

1. **Cryptographic Public/Private Key Pairs:**
   - Agents authenticate using asymmetric cryptography (Ed25519 or ECDSA).
   - Agent software signs request payloads using its private key; Bytebank verifies the signature against the registered public key in Bytebase.
2. **Challenge-Response & Nonces:**
   - To prevent replay attacks, all authenticated requests require a server-issued challenge nonce, timestamp, and signature with strict expiration windows (e.g., 60 seconds).
3. **KMS / HSM Key Management:**
   - Platform-managed signers or sponsored relayer keys are stored in hardware security modules (HSM) or cloud KMS (Google Cloud KMS / AWS KMS). Raw private keys are never stored in plaintext or logged.
4. **Credential Rotation & Instant Revocation:**
   - If an agent's runtime is compromised or updated, credentials can be rotated without modifying the canonical Agent ID.
   - Controllers can immediately trigger a `SUSPEND` or `REVOKE` command, instantaneously blocking all pending and future financial operations both off-chain and at the smart account gateway.
5. **PostgreSQL Audit Records:**
   - Every identity state change, authentication attempt, policy evaluation, and financial transaction is logged with immutable attribution to the originating Agent ID and Controller ID.

---

## 5. Developer Infrastructure

Bytebank provides first-class developer tooling to empower both human engineers and autonomous agents to integrate seamlessly:

- **REST APIs:** Fully typed, auto-documented OpenAPI 3.1 endpoints exposed via FastAPI.
- **TypeScript SDK:** The flagship client library providing high-level abstractions for agent registration, identity resolution, balance checks, and payment initiation.
- **Python SDK:** Designed for Python-based agent frameworks (LangChain, LlamaIndex, CrewAI, AutoGen) to interact with Bytebank natively.
- **Webhook Dispatcher:** Outbound HTTPS notifications for events: `payment.completed`, `payment.failed`, `policy.rejected`, `identity.suspended`.
- **CI/CD Automation:** GitHub Actions for linting, type-checking, automated unit/integration tests, and container image builds.
- **Observability:** OpenTelemetry instrumentation for distributed tracing across API requests, database queries, and Stellar RPC calls.

---

## 6. System Architecture: The Modular Monolith

Bytebank avoids premature distributed system complexity by deploying as a **Modular Monolith**. Internal boundaries are strictly defined with clear domain interfaces, enabling straightforward migration to microservices only when domain scaling demands it.

```
                              +-------------------------+
                              |   Next.js / TypeScript  |
                              |   Frontend & Dashboard  |
                              +-------------------------+
                                           |
                                           | REST / OpenAPI
                                           v
+---------------------------------------------------------------------------------------+
|                               FASTAPI MODULAR MONOLITH                                |
|                                                                                       |
|  +------------------------+  +------------------------+  +------------------------+  |
|  |    Identity Module     |  |     Account Module     |  |     Policy Engine      |  |
|  |       (Bytebase)       |  |       (Bytebank)       |  |  - Max per-tx limit    |  |
|  | - Agent ID Registry    |  | - Smart Account Prov.  |  |  - Period velocity     |  |
|  | - Public Key Auth      |  | - Address Linkage      |  |  - Asset whitelist     |  |
|  | - Profile Resolution   |  | - Balance Inquiries    |  |  - Destination check   |  |
|  +------------------------+  +------------------------+  +------------------------+  |
|               |                           |                           |               |
|  +------------------------+  +------------------------+  +------------------------+  |
|  |     Payment Engine     |  |  Ledger & Audit Module |  |    Webhook Service     |  |
|  | - Tx Preparation       |  | - Immutable Audit Log  |  | - Event Dispatcher     |  |
|  | - Stellar RPC Client   |  | - Attributable Records |  | - Retry Queue          |  |
|  | - Status Tracker       |  | - Reconciliation       |  | - Signature Headers    |  |
|  +------------------------+  +------------------------+  +------------------------+  |
+---------------------------------------------------------------------------------------+
               |                                            |
               v                                            v
+-----------------------------+              +-----------------------------+
|    PostgreSQL Relational    |              |       Stellar Horizon /     |
|   Identity & Financial DB   |              |       Soroban RPC Node      |
+-----------------------------+              +-----------------------------+
```

### Core Internal Modules

1. **Identity Module (Bytebase Engine):**
   - Manages Person, Organization, and Agent records.
   - Handles challenge generation, cryptographic signature validation, and public identity resolution.
2. **Account Module (Bytebank Financial Service):**
   - Links Bytebase Agent IDs to Stellar smart account addresses.
   - Manages testnet funding workflows (Friendbot integration and test asset distribution).
3. **Policy & Authorization Module:**
   - Evaluates incoming transaction requests against configured spending rules:
     - Transaction maximum limit (e.g., max 10 XLM per single operation).
     - Velocity limits (e.g., max 50 XLM per 24 hours).
     - Recipient address / Agent ID whitelists.
     - Permitted asset codes.
   - Rejects unauthorized transactions before submitting them to the network.
4. **Payment & Settlement Engine:**
   - Interacts with Stellar SDK to construct transaction envelopes, assemble Soroban invocation authorizations, sign via relayer/agent, and submit via RPC.
5. **Ledger & Audit Module:**
   - Records double-entry style records and lifecycle events in PostgreSQL, reconciling on-chain transaction hashes and statuses (`PENDING`, `CONFIRMED`, `FAILED`, `REJECTED_BY_POLICY`).

---

## 7. Solution Approach: MVP User Journeys

### Journey 1: Agent Registration, Smart Account Provisioning & Funding
1. Human controller logs into the Bytebank Dashboard and navigates to the Agent Management view.
2. Controller clicks "Create Agent", providing a name, purpose, and public key (or generating a key pair).
3. Bytebase creates an immutable record, issuing a stable `Agent ID` (e.g., `agent_01h8x...`).
4. Bytebank automatically provisions a linked Stellar smart account on Testnet.
5. Controller triggers testnet funding; Bytebank monitors transaction confirmation and updates the agent's verified balance.
6. Controller configures spending parameters: Per-transaction ceiling = 25 XLM, Daily budget = 100 XLM.

### Journey 2: Identity Lookup & Destination Resolution
1. Agent A intends to pay Agent B for an API query.
2. Agent A queries Bytebase Identity API: `GET /api/v1/identity/resolve?agent_id=agent_b_092a...`
3. Bytebase verifies that Agent B's status is `ACTIVE` and returns the public resolution payload containing Agent B's verified payment destination address and accepted assets.
4. Internal controls, spending balances, and private controller data remain strictly unexposed.

### Journey 3: Agent-to-Agent Payment Execution
1. Agent A constructs a payment request payload specifying Recipient Agent ID, Asset, and Amount.
2. Agent A signs the challenge with its registered private key and submits to `POST /api/v1/payments`.
3. Bytebank validates cryptographic proof of possession.
4. Bytebank evaluates spending policy: Amount (5 XLM) <= Per-Tx Limit (25 XLM) and Daily Total (15 XLM) <= 100 XLM. Status: **APPROVED**.
5. Payment engine prepares the Stellar transaction, submits to Stellar RPC, receives the transaction hash, and monitors consensus.
6. Ledger records the completed transaction; both agents receive webhook confirmations.

### Journey 4: Prohibited Payment Rejection
1. Agent A attempts to submit a payment of 500 XLM (exceeding its 25 XLM policy limit).
2. Bytebank Policy Engine intercepts the request during validation.
3. The request is immediately rejected with HTTP 403 Forbidden and a structured error code: `ERR_POLICY_EXCEEDED_TRANSACTION_LIMIT`.
4. No transaction is submitted to the blockchain (preventing wasted network fees).
5. The rejection is recorded in the PostgreSQL audit ledger and flagged on the Controller's dashboard.

### Journey 5: Emergency Suspension & Revocation
1. An anomalous behavior or leaked key is detected by the Controller.
2. The Controller clicks "Revoke Credentials" or "Suspend Agent" in the Dashboard.
3. Bytebase updates the Agent lifecycle status to `SUSPENDED`.
4. Subsequent signature validations immediately fail, blocking all API interactions and on-chain signing requests.

---

## 8. What We Are Deliberately NOT Using Initially

To maximize velocity, eliminate unnecessary operational overhead, and maintain laser focus on product-market validation, the following technologies are explicitly excluded from the MVP:

| Excluded Technology | Architectural Rationale for Exclusion |
| :--- | :--- |
| **Kubernetes (K8s)** | Premature operational burden. Docker Compose and managed container runtimes (Cloud Run, ECS) provide sufficient isolation and scaling for MVP. |
| **Kafka / Distributed Streaming** | Event volumes at MVP do not require distributed partitions. PostgreSQL and lightweight asynchronous Python workers provide sufficient messaging and audit capability. |
| **Microservices Architecture** | Cross-service network hops, distributed transactions, and eventual consistency introduce friction. A modular monolith enforces clean code boundaries with zero distributed overhead. |
| **Multiple Blockchains** | Focus is on perfecting the agent financial lifecycle and Soroban smart accounts on Stellar before abstracting cross-chain bridges or EVM networks. |
| **Separate DBs per Network** | A unified, well-indexed PostgreSQL database handles relational integrity and audit history across entities. |
| **Transferable NFTs for Identity** | Agent identity must be an auditable, controller-attributable relationship with stable IDs and key rotation, not a speculative or transferable on-chain token. |

---

## 9. Staged Roadmap

- **Phase 0 (Foundation & Spike):** Validate Soroban smart account contract templates, Stellar Python SDK integration, and cryptographic challenge-response signature schemes.
- **Phase 1 (MVP Delivery):** Next.js dashboard + FastAPI modular monolith + PostgreSQL + Stellar Testnet smart accounts. Delivery of all 5 core user journeys.
- **Phase 2 (Enterprise & Teams):** Multi-user organization workspaces, team role-based access control (RBAC), and aggregated spending dashboards.
- **Phase 3 (Developer Ecosystem & SDKs):** Production-ready TypeScript & Python SDKs, framework adapters (LangChain, CrewAI), and inbound/outbound webhooks.
- **Phase 4 (Multi-Rail Expansion):** Additional payment rails, stablecoins, fiat virtual accounts, and institutional partner integrations.
