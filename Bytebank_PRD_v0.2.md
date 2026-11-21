# Bytebank — Product Requirements Document (PRD)

**Version:** 0.2 — Updated Architecture Baseline  
**Status:** Architecture Baseline & Technical Specification  
**Product:** Bytebank  
**Identity Authority & Companion Specification:** [identity.md](file:///home/ai-apostle/Projects/bytebank/identity.md) (Bytebase Agent Identity Infrastructure)  
**Technical Architecture:** [techstack.md](file:///home/ai-apostle/Projects/bytebank/techstack.md)  
**Initial financial network:** Stellar Testnet  
**Working category:** Agent financial infrastructure

---

## 1. Overview

Bytebank is financial infrastructure designed for AI agents. It gives agents persistent financial identities, linked financial accounts, and the ability to receive, send, and manage payments through programmable authorization—while individuals, businesses, developers, and financial institutions retain appropriate ownership, oversight, and control.

The first MVP will use Stellar as its financial execution layer. It will demonstrate agent registration and identity resolution, an agent-linked Stellar smart account, funding, agent-to-agent payments, transaction records, and authorization limits.

Bytebank is not simply a wallet interface or an AI chatbot that can initiate transfers. Its central product proposition is that an agent is a recognizable financial actor with an identity, controller relationships, accounts, permissions, and an auditable financial lifecycle.

## 2. Vision

Build a common financial infrastructure layer that allows autonomous agents to participate in economic activity and allows people, businesses, developers, fintechs, and financial institutions to create, connect, and manage those capabilities.

Long-term, Bytebank may abstract across blockchain wallets, stablecoins, bank accounts, payment providers, and other financial rails. The MVP intentionally focuses on Stellar Testnet to validate the core model before adding additional rails or regulated fiat services.

## 3. Problem

As agents become capable of performing tasks autonomously, they need to interact with financial services: paying for software and APIs, purchasing goods or services, receiving payment, reimbursing expenses, paying suppliers, and transacting with other agents.

Today, developers and organizations must assemble these capabilities from separate systems. They may need to build or integrate wallets, payment APIs, identity, key management, permissioning, spending controls, transaction attribution, and monitoring. Existing financial accounts and payment systems are generally designed around human or business account holders and do not consistently expose an agent-oriented identity, delegation, and control layer.

Bytebank aims to provide a shared infrastructure layer for these capabilities.

## 4. Customers and stakeholders

Bytebank is designed to serve all of the following through one underlying infrastructure, with different interfaces and integration paths.

### 4.1 Individuals
People who want to create and manage financial capabilities for personal AI agents.

Needs:
- Create/register personal agents.
- Create one or more accounts for an agent.
- Fund accounts.
- Set spending authority.
- See balances and activity.
- Pause, disable, or revoke agents and access.

### 4.2 Businesses and organizations
Organizations that deploy multiple agents for business operations.

Needs:
- Organization workspace and administration.
- Create and manage multiple agents.
- Create separate financial accounts for agents.
- Fund and manage accounts.
- Define limits and allowed operations.
- View activity across agents/accounts.
- Disable agents, revoke credentials, and manage permissions.
- Attribute transactions to the responsible agent.

### 4.3 Developers and agent builders
Developers who integrate Bytebank into their agents, products, or agent frameworks.

Needs:
- API and SDK access.
- Programmatic agent registration.
- Identity and account provisioning.
- Authentication.
- Payment operations.
- Identity lookup/resolution.
- Webhooks and transaction status.
- Test environment and documentation.

### 4.4 AI agents
Agents that interact with Bytebank programmatically and may initiate requests for identity, accounts, or financial capabilities.

Needs:
- Authenticate as a registered agent.
- Retrieve their authorized capabilities.
- Resolve another agent's identity/payment destination.
- Read permitted account information.
- Request or initiate permitted financial operations.
- Receive machine-readable payment and transaction results.

An agent is not assumed to be a legal person or independently verified customer. The accountable controller/owner and provider requirements remain relevant.

### 4.5 Financial institutions and fintechs
Banks, payment providers, and fintechs may act as infrastructure providers, enterprise customers, integration partners, or distribution channels.

Potential needs:
- Integrate Bytebank's agent identity and authorization layer with existing accounts and payment rails.
- Expose supported financial services to eligible agents through controlled interfaces.
- Use Bytebank for agent-level authentication, delegation, transaction attribution, and controls.
- Offer Bytebank-powered capabilities under their own brand (potential white-label model).
- Provision or link accounts where their APIs and commercial/regulatory arrangements allow.

Institution integrations and white-label features are future scope, not MVP scope.

## 5. Product principles

1. **Identity is separate from a wallet address.** An agent has a persistent Bytebank identity and may have multiple accounts or payment rails.
2. **One infrastructure, multiple entry points.** A human, developer, business system, institution, or agent can initiate onboarding, subject to appropriate verification and authorization.
3. **Accountability remains clear.** Agent identity is linked to an owner/controller and, where relevant, a developer or deploying organization.
4. **Authorization is enforced outside the AI model.** The model must not be trusted to enforce financial limits on its own.
5. **Separate accounts are first-class.** Agents can have distinct accounts; individuals and organizations can manage multiple agents and accounts.
6. **Security and privacy by design.** Public identity lookup exposes only appropriate information; private credentials, sensitive controller data, permissions, and balances are not public.
7. **Network-specific details are abstracted where practical.** Agent identity should not be synonymous with a Stellar address.
8. **Stellar is used meaningfully in the MVP.** It is the actual payment and programmable-account execution layer, not merely a place to store identity data.

## 6. Product model and conceptual entities

The platform should distinguish these entities:

- **Person:** An individual account holder/controller.
- **Organization:** A business or institution workspace with administrators and members.
- **Developer:** A person or organization that builds or deploys an agent; may also be its controller.
- **Agent:** A registered autonomous software actor with a persistent identity, credentials, lifecycle/status, controller relationship, and capabilities.
- **Bytecript:** The agent's digital identity card and verifiable credential object. It encapsulates the canonical Agent ID, Byte Network residence, public key credentials, and active verification status.
- **Financial account:** An account or wallet associated with an agent or owner. It may be network-specific or provider-specific. An agent can have multiple accounts.
- **Controller/owner relationship:** A recorded relationship defining who is accountable for the agent and who can administer or authorize its financial access.
- **Credential/key:** Cryptographic material used to authenticate an agent, account, controller, or authorized signer.
- **Permission/policy:** Rules defining which operations, assets, destinations, amounts, and periods are allowed.
- **Transaction:** A financial operation initiated by or attributed to an agent, with status, network/provider reference, and audit data.
- **Provider/rail:** An integrated financial network or service (MVP: Stellar Testnet).

### Account model

The MVP should support the conceptual model of multiple accounts per agent, but the initial user experience and test flow may provision one primary Stellar smart account per agent. The design should avoid hard-coding a one-agent/one-wallet relationship.

Individuals and organizations can create agents and manage their accounts from a central workspace. A separate account per agent is the intended model for the initial demonstration, subject to implementation feasibility and account-provider constraints.

An account's legal ownership, custody, and asset segregation must not be implied solely by a Bytebank account label or an on-chain address. Those depend on the actual financial and custody arrangement.

## 7. Agent identity and Bytebase Identity Infrastructure

> [!IMPORTANT]
> **Companion Specification:** The complete technical and architectural specification for agent identity is documented in [identity.md](file:///home/ai-apostle/Projects/bytebank/identity.md) (*Bytebase Agent Identity Infrastructure — v0.1*).
> 
> **Core Integration Requirements for Bytebank:**
> 1. **Mandatory Identity Prerequisite:** Every agent receiving a Bytebank financial account must have a valid, active Bytebase Agent ID.
> 2. **Pre-Provisioning Verification:** Bytebank must resolve and verify the identity through Bytebase before provisioning an agent account.
> 3. **Canonical Linkage:** Bytebank must link the provisioned financial account (e.g., Stellar smart account) to the canonical Bytebase Agent ID.
> 4. **Attributable Operations:** All agent-initiated transactions must retain the Bytebase Agent ID, credential reference, and cryptographic verification evidence.
> 5. **Lifecycle Synchronization:** Bytebank must respond to relevant Bytebase identity lifecycle changes (e.g., freeze operations when `suspended` or `compromised`) according to its own account and payment policies.
> 6. **Separation of Concerns:** Bytebase registration proves agent identity and credential control; it does **not** replace human verification, KYC, compliance, or financial eligibility checks required by Bytebank or financial providers.

**Identity is a core product in its own right, owned by Bytebase, not merely a prerequisite for Bytebank accounts or payments.** Bytebase Identity can be used by external platforms and services—even services that do not use Bytebank for financial transactions—to identify, resolve, authenticate, and verify agents.

Bytebank Identity is a central registry and resolution service for agents registered with Bytebank, with verification interfaces that third-party platforms can integrate. The long-term product is an identity infrastructure/API and portal, rather than only a directory page inside the Bytebank dashboard.

### 7.1 External identity verification use case

An agent may attempt to access a third-party service, website, API, marketplace, community, or other platform that has integrated Bytebank Identity. That platform may ask the agent to present its Bytebank identity or credential and call Bytebank to verify it.

The integrating platform should be able to determine, according to the verification method and information disclosed:
- Whether the presented Bytebank Agent ID/identity exists and is valid.
- Whether the identity credential or proof is authentic and has not been tampered with.
- Whether the presenting agent can prove possession of the credential/key associated with that identity (not merely copy another agent's ID).
- Whether the identity is active, suspended, revoked, or flagged as compromised.
- The agent's declared name/profile and permitted public claims.
- Whether a controller/owner/developer relationship has been verified, where such a claim is available and disclosure is permitted.
- Whether the agent can present a separate credential or authorization relevant to the requested action.

Bytebank's response must distinguish **identity verification** from **action authorization**. Verifying an agent's identity does not automatically mean the platform should grant access, trust its behavior, approve a transaction, or allow it to act for a person or business. The relying platform remains responsible for its access policy and for checking any required action-specific authorization.

Potential integration patterns include a verification API, a credential presentation/verification flow, and a human-facing identity portal/profile. The exact API and credential protocol are open design decisions.

### 7.2 Identity fields (proposed)

Each registered agent should have:
- Unique, stable Bytebank Agent ID.
- Human-readable name.
- Optional description and avatar.
- Agent type/purpose (optional metadata).
- Developer/creator relationship.
- Controller/owner relationship.
- Public key or supported authentication credential reference.
- Linked financial account(s), with suitable public/private visibility.
- Registration and lifecycle status.
- Creation time and relevant update timestamps.
- Optional framework or runtime metadata.

### 7.3 Identity resolution

A person, agent, or integrated external platform can enter another agent's Bytebank ID, identity URL, or supported identifier and resolve it to a profile. Identity resolution should work independently of whether the requesting party uses Bytebank accounts or payments.

The lookup should return only public or explicitly shareable fields, such as:
- Agent name.
- Bytebank Agent ID.
- Identity status.
- Appropriate verification indicators.
- Public controller/business display name, if opted in and allowed.
- Public payment/account destination or a safe payment instruction.
- Supported network/asset information, where available.

It must not return:
- Private keys or secret credentials.
- Personal KYC details.
- Private account balances.
- Internal spending rules.
- Sensitive owner/controller information.
- Any data not authorized for public resolution.

### 7.4 Identity verification concepts

Bytebank should distinguish:
- **Registered:** A Bytebank identity record exists.
- **Authenticated:** The requester proves possession/control of registered credentials.
- **Controller verified:** The responsible person/organization has completed applicable checks.
- **Account linked/verified:** The financial account is demonstrably associated with the identity.
- **Authorized:** The identity has permission to perform a requested action.

Registration does not mean an agent is safe, trustworthy, intelligent, or guaranteed to behave correctly. Bytebank must avoid implying a trustworthiness score from identity verification alone.

### 7.5 Identity lifecycle

Proposed statuses:
- Pending
- Active
- Suspended
- Revoked
- Compromised (where applicable)

The system should support credential rotation and revocation. Suspension/revocation must affect the ability to use Bytebank-controlled financial capabilities and should be reflected in identity verification responses to external relying platforms. The exact on-chain/off-chain enforcement and recovery model must be designed.

### 7.6 Interoperability and standards

Bytebank should not invent a closed identity/authentication protocol if suitable open standards can meet the requirements. The design should investigate interoperability with agent-authentication and credential standards/protocols, including work emerging through the FIDO Alliance and relevant agent/payment ecosystems. Google AP2 and Mastercard Verifiable Intent are adjacent initiatives to evaluate for compatibility, especially around proof of delegated intent and transaction authorization; they are not substitutes for Bytebank's identity registry and resolution service.

Bytebank should initially own its registry, API, verification experience, and integration tooling, while keeping identity records and credentials portable/interoperable where practical. **Standards, credential formats, and protocol choices remain undecided** and must be assessed before implementation.

## 8. Account provisioning and onboarding models

Bytebank should support three entry paths over time, converging on the same identity/account model.

### Model A — Human initiated
A person or organization signs in, registers an agent, provisions an account, funds it, and configures permissions.

### Model B — Agent initiated
An agent requests registration or financial capabilities programmatically. The request may create a pending identity or capability request. Required controller verification, approvals, and compliance checks must not be bypassed.

### Model C — API/platform initiated
A developer platform, business system, or integrated institution provisions agents and accounts via API, potentially in bulk.

For the MVP, Model A should be the primary fully implemented onboarding path. Model C may be demonstrated through API endpoints for agent registration/account provisioning. Model B can be represented as a pending request flow or documented API design if time does not permit full autonomous onboarding.

## 9. Core features and functionality

### 9.1 User and organization workspaces
- User registration/login.
- Personal workspace.
- Organization workspace (MVP may implement a minimal organization model).
- Workspace agent/account overview.
- Workspace administration and controller ownership.

### 9.2 Agent registration and management
- Create an agent through the dashboard.
- Create an agent through API (where included in MVP).
- Assign name and metadata.
- Generate or register authentication credentials.
- Establish controller/developer relationship.
- View identity profile.
- Activate, suspend, or revoke agent.
- Support credential rotation/revocation where feasible.

### 9.3 Bytebank Identity Portal
- Search/resolve by Bytebank Agent ID or supported identifier.
- Display an agent profile.
- Display appropriate verification and status.
- Display public payment destination/account information.
- Verify linkage between agent identity and account.
- API endpoint for identity resolution.
- Public/private field controls.

### 9.4 Financial accounts
- Provision a Stellar smart account for an agent.
- Link the account to the Bytebank Agent ID.
- Show account address, network, asset balances, and status.
- Support more than one account per agent in the data model.
- Provide a clear testnet funding workflow.
- Record funding events and network references.
- Account recovery/owner-control model must be documented.

### 9.5 Payments
- Send a payment from an agent's account.
- Receive payments into an agent's account.
- Resolve a recipient agent's Bytebank identity to an eligible destination.
- Agent-to-agent payment flow.
- Show transaction status and network reference.
- Transaction history for an agent and its accounts.
- Payment receipts or transaction details.
- Handle failed, rejected, pending, and successful transactions.

### 9.6 Authorization and spending controls
- Define transaction-level limits.
- Define a total or period spending limit where feasible.
- Restrict supported asset(s).
- Allow/restrict recipient(s) if supported in the initial implementation.
- Expiration of delegated authority, if feasible.
- Owner/controller approval for selected actions, if feasible.
- Revoke agent authority.
- Demonstrate an out-of-policy transaction being rejected.

The exact enforcement mechanism must be validated against the selected Stellar smart-account contracts and SDKs. Controls that are only checked in the backend must be clearly distinguished from controls enforced on-chain.

### 9.7 Dashboard and monitoring
- Agent list and statuses.
- Account list and balances.
- Identity profile.
- Transaction history.
- Payment status.
- Permission summary.
- Funding instructions.
- Ability to suspend/revoke.
- Simple activity/audit view.

### 9.8 Developer API and SDK
The MVP should expose a minimal, documented API for:
- Register agent.
- Retrieve agent identity.
- Resolve agent ID.
- Provision/link account.
- Retrieve account information.
- Initiate permitted payment.
- Retrieve transaction status/history.
- Configure or request permissions, as supported.
- Receive webhooks for relevant events, if feasible.

SDK and framework integrations are not required for every framework in the MVP. A simple SDK or sample agent demonstrating the API is sufficient.

## 10. Stellar MVP scope

### 10.1 Stellar's role
Stellar is the MVP financial network and execution layer. Soroban smart contracts provide programmable account/authorization functionality where validated and appropriate. Stellar assets and payment operations provide the testnet money movement.

### 10.2 Intended building blocks (subject to technical validation)
- Stellar Testnet.
- Soroban smart-account implementation/framework.
- Smart-account authorization/signers.
- Policy or spending-limit mechanisms compatible with selected account implementation.
- A test asset for funding and payments.
- Transaction submission and status tracking.
- Fee abstraction/sponsorship or relayer support, if feasible and compatible.

Do not assume that every policy, signer, session-key, relayer, or smart-account feature is compatible without testing the exact versions and implementations.

### 10.3 MVP asset
Select one test asset for the demonstration. The initial implementation should avoid multi-asset complexity. Testnet asset choice, issuer, trustline requirements, and the funding method must be documented.

### 10.4 On-chain vs off-chain
Likely off-chain:
- Identity profiles and search.
- Controller/developer metadata.
- API authentication and developer management.
- Dashboard.
- Indexing and transaction presentation.
- Private information and verification records.
- Audit/monitoring logic that is not required to be on-chain.

Likely on-chain:
- Smart account.
- Asset balances and transfers.
- Authorization and policy enforcement supported by the chosen contracts.
- Account/identity linkage proof or identifier, only if this provides a meaningful verification benefit.

Do not place sensitive personal or business information on-chain. The team must decide whether identity linkage is represented on-chain directly, by a hash/identifier, or verified through another mechanism.

## 11. MVP user journeys

### Journey 1 — Individual creates and funds an agent
1. User signs up and opens a personal workspace.
2. User creates an agent and assigns a name.
3. Bytebank issues a unique Agent ID and establishes credentials.
4. Bytebank provisions a Stellar smart account.
5. Account is linked to the agent identity and linkage is verified.
6. User funds the account on Testnet.
7. User configures a spending limit.
8. Agent becomes financially enabled.

### Journey 2 — Agent looks up another agent
1. Agent A receives Agent B's Bytebank ID or identity URL.
2. Agent A queries Bytebank Identity.
3. Bytebank returns Agent B's public profile and eligible payment destination.
4. Agent A verifies identity/account status and obtains payment details.
5. Agent A initiates a payment subject to its own authority.

### Journey 3 — Agent pays another agent
1. Agent A authenticates.
2. Agent A requests a payment to Agent B.
3. Bytebank resolves the recipient identity and account.
4. Authorization checks are performed.
5. Transaction is submitted to Stellar.
6. Bytebank tracks confirmation and records the transaction.
7. Both relevant agents/controllers can view the transaction, subject to access controls.

### Journey 4 — Prohibited payment
1. Agent requests a payment outside its configured authority.
2. Authorization/policy check rejects it.
3. The system records the rejection reason without exposing secrets.
4. Dashboard displays the rejected attempt.

### Journey 5 — Business manages agents
1. Organization creates a workspace.
2. Administrator creates multiple agents.
3. Each agent receives a distinct identity and account.
4. Administrator views agent/account status and transactions.
5. Administrator suspends or revokes an agent.

## 12. MVP success criteria

The MVP is successful if a reviewer can:

1. Register an individual or test organization.
2. Create an agent and receive a stable Bytebank Agent ID.
3. View the agent's identity profile in Bytebank Identity.
4. Look up a second agent by ID and retrieve its public profile.
5. Verify that the profile's linked Stellar account is associated with the identity.
6. Provision and fund an agent smart account on Testnet.
7. Execute an authorized payment from one agent to another.
8. See the confirmed transaction and its network reference in Bytebank.
9. Attempt a prohibited payment and demonstrate rejection by the implemented policy enforcement.
10. Suspend or revoke an agent and demonstrate the effect on subsequent operations.

## 13. Non-goals for MVP

- Mainnet funds or production financial services.
- Fiat bank accounts or virtual accounts.
- Card issuance.
- Fiat on/off ramps.
- Licensed banking, custody, or merchant acquiring.
- Integrations with multiple banks/fintechs.
- White-label financial institution product.
- Multiple blockchains.
- Agent marketplace or discovery network beyond identity lookup.
- Reputation/trust scoring.
- ZK identity or confidential payment features.
- Full compliance automation.
- Large-scale enterprise role/approval workflows.
- Broad framework integrations.
- Multi-asset account complexity.
- Autonomous agent onboarding that bypasses controller/verification requirements.

## 14. Security, privacy, and risk requirements

- Never expose private keys, seed phrases, or secret credentials.
- Do not allow the LLM itself to be the sole enforcement point for financial permissions.
- Require cryptographic authentication for agent actions.
- Link agents to accountable controllers as appropriate.
- Separate public identity data from private financial and controller data.
- Support credential rotation and revocation.
- Protect API credentials and use scoped access where possible.
- Maintain transaction and administrative audit records.
- Clearly identify which controls are enforced on-chain versus off-chain.
- Define account recovery and controller recovery.
- Avoid implying that registration or verification guarantees agent trustworthiness.
- Do not describe a blockchain wallet as a regulated bank account or imply legal ownership/custody without an appropriate structure.
- Production use will require jurisdiction-specific legal, compliance, licensing, custody, AML/KYC, sanctions, consumer protection, and provider-partnership analysis.

## 15. High-level architecture (proposed)

- **Web dashboard:** Individual and organization workspaces, identity portal, accounts, payments, controls.
- **Bytebank API:** Developer/agent-facing REST API and authentication.
- **Identity service:** Agent registration, identity resolution, controller relationships, status, public profile.
- **Authorization service:** Permissions, policy evaluation, delegation, revocation.
- **Account service:** Account provisioning and account/agent linkage.
- **Stellar integration:** Soroban smart accounts, asset/payment execution, transaction tracking, network interaction.
- **Ledger/audit service:** Internal transaction and activity records; reconcile on-chain results.
- **Webhook service:** Event delivery for payments, account changes, identity changes (if included).
- **Database:** Off-chain profile, metadata, status, permissions, indexing, and audit records; sensitive data handled carefully.
- **Key management:** Secure credential/key handling with separation from application logic; exact custody model remains undecided.

This is a conceptual architecture; technology choices and component boundaries remain open.

## 16. Proposed MVP interface surfaces

1. **Bytebank Dashboard:** Home for personal/business users.
2. **Agents:** Create, view, manage, suspend/revoke.
3. **Bytecript Digital ID & Profile:** Interactive digital ID card (Bytecript), identity details, linked account(s), verification/status, public profile.
4. **Identity Lookup:** Search/resolve Bytebank Agent ID / Bytecript.
5. **Accounts:** Account addresses, network, balances, funding instructions.
6. **Payments:** Send/receive, recipient resolution, transaction status/history.
7. **Controls:** Spending limits and permissions.
8. **Developer Console:** API credentials, basic docs, test tools (may be simplified for MVP).

## 17. Open product and technical questions

These remain unresolved and should be discussed before implementation:

### Identity
- Is Bytebank Agent ID human-readable, opaque, or both?
- Should agents have public profiles by default or opt-in profiles?
- What proves an agent's identity across different frameworks and deployments?
- How does identity persist if an agent's model/framework changes?
- Can an agent have multiple developers/controllers?
- What is the recovery model if credentials are compromised?
- Is Bytebank identity interoperable with external agent identity standards, or initially Bytebank-specific?

### Accounts
- Is the agent account a smart account, a wallet, or an abstraction?
- Who is the legal/account owner in each model?
- Can one agent have multiple accounts, networks, currencies, and providers?
- Can the controller recover or transfer control of an account?
- Can agents create accounts autonomously, and what approvals are required?

### Financial operations
- How do agents receive funds?
- Can they create payment links or payment requests?
- Can agents collect from human customers?
- How will account-to-account transfers work?
- What happens to refunds, disputes, failed payments, and erroneous transfers?
- Should payments require approval based on amount, recipient, risk, or other context?

### Institution integration
- What role does Bytebank play when a fintech supplies the underlying account?
- Which integrations should be API-based?
- What responsibilities are retained by the institution?
- What would a white-label model require?
- What regulatory and commercial arrangements are needed?

### Stellar implementation
- Which smart-account implementation is selected?
- What authorization/policy mechanisms are actually supported?
- How will agent identity be linked to the smart account?
- What asset is used for MVP?
- How will fees be abstracted?
- What relayer/sponsorship mechanism is compatible?
- How are revocation, recovery, and limits enforced?
- What is indexed off-chain and how is it reconciled?

## 18. Suggested staged development

### Phase 0 — Product/technical validation
- Confirm the product model and account ownership assumptions.
- Evaluate Stellar smart-account options.
- Prove account provisioning, authorization, and Testnet payment in a small technical spike.
- Validate identity/account linkage.
- Validate policy enforcement and revocation.
- Choose the test asset and transaction-fee approach.

### Phase 1 — MVP
- Individual workspace.
- Agent registration and identity portal.
- Agent lookup.
- Agent smart-account provisioning.
- Funding workflow.
- One asset.
- Agent-to-agent payment.
- Spending policy enforcement and rejection demo.
- Transaction history.
- Basic API and dashboard.

### Phase 2 — Business workspace
- Organizations and team roles.
- Multiple agents/accounts.
- Organization funding and account management.
- Aggregated activity.
- More granular controls.

### Phase 3 — Developer and institution integrations
- Mature SDKs and webhooks.
- External agent frameworks.
- Fintech/bank integrations.
- Provider abstraction and linked accounts.
- White-label options.

### Phase 4 — Multi-rail financial infrastructure
- Additional blockchain networks, where justified.
- Stablecoin and fiat integrations.
- Virtual accounts.
- Payment acceptance.
- Cards or additional financial services, subject to providers and regulatory arrangements.

## 19. Working positioning statement

**Bytebank is financial infrastructure for AI agents. It provides agent identities, financial accounts, payments, and programmable financial authority—connecting autonomous agents, their owners, developers, businesses, and financial service providers.**

## 20. Review status & Companion Documents

This document is the core Product Requirements Document for Bytebank. It is tightly coupled with:
- **Identity Specification:** [identity.md](file:///home/ai-apostle/Projects/bytebank/identity.md) — *Bytebase Agent Identity Infrastructure (Canonical Identity Registry, Credentials, Proof-of-Possession & Attribution)*
- **Technical Architecture:** [techstack.md](file:///home/ai-apostle/Projects/bytebank/techstack.md) — *Core Stack, Modular Monolith Architecture, Stellar/Soroban Financial Engine & Solution Approach*
- **Frontend Taste Directives:** [bytebank-frontend/AGENT.md](file:///home/ai-apostle/Projects/bytebank/bytebank-frontend/AGENT.md) — *Design Taste Guidelines, High-Trust Color Palette & UI Directives*

The product model, identity design, account ownership, and core financial journeys are established in these specifications for implementation planning and development.
