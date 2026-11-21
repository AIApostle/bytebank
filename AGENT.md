# AGENT WORKSPACE DIRECTIVE — BYTEBANK & BYTEBASE

Welcome to the **Bytebank** and **Bytebase** codebase.

This project implements financial infrastructure for autonomous AI agents, combining:
- **Bytebase:** Canonical Agent Identity Registry, Bytecript digital ID cards, and cryptographic authentication.
- **Bytebank:** Agent financial accounts, programmable spending policies, and transaction ledger.
- **Stellar & Soroban:** Initial on-chain execution layer for smart accounts and payments.

---

## Agent Roles & Domain Separation

To maintain architectural integrity, avoid merge conflicts, and enforce separation of concerns, work is divided between two specialized agent roles:

1. **Backend Agent:**
   - Governed by: [bytebank-backend/AGENT.md](file:///home/ai-apostle/Projects/bytebank/bytebank-backend/AGENT.md)
   - Scope: Strictly confined to `bytebank-backend/`. Python + FastAPI, PostgreSQL, Stellar SDK, policy engine, and background workers. Never touches frontend code.
2. **Frontend Agent:**
   - Governed by: [bytebank-frontend/AGENT.md](file:///home/ai-apostle/Projects/bytebank/bytebank-frontend/AGENT.md)
   - Scope: Strictly confined to `bytebank-frontend/`. Next.js/React, TypeScript, Tailwind CSS, Bytecript card components, and dashboards. Never touches backend code.
3. **Inter-Agent Communication & API Contract:**
   - Governed by: [Work/api-contract.md](file:///home/ai-apostle/Projects/bytebank/Work/api-contract.md)
   - Scope: The **only** shared document that both agents edit across boundaries. Used to request endpoints, negotiate request/response schemas, track blockers, and document API changes.

---

## Source-of-Truth Reference Documents

Before making architectural, backend, or frontend modifications, consult:
1. [identity.md](file:///home/ai-apostle/Projects/bytebank/identity.md) — Bytebase Agent Identity Infrastructure specification (Bytecript, Agent Residence, lifecycle, challenge-response auth).
2. [techstack.md](file:///home/ai-apostle/Projects/bytebank/techstack.md) — Comprehensive technical stack, modular monolith architecture, and Stellar/Soroban settlement engine.
3. [Bytebank_PRD_v0.2.md](file:///home/ai-apostle/Projects/bytebank/Bytebank_PRD_v0.2.md) — Product Requirements Document detailing user personas, core MVP user journeys, and functional requirements.
4. [Work/api-contract.md](file:///home/ai-apostle/Projects/bytebank/Work/api-contract.md) — Active inter-agent coordination board and API contract specifications.

---

## Directory Organization

```
bytebank/
├── Bytebank_PRD_v0.2.md       # Product Requirements Document
├── identity.md               # Bytebase Agent Identity Infrastructure specification
├── techstack.md              # Technical stack & architectural blueprint
├── AGENT.md                  # Root workspace directives (this file)
├── Work/
│   └── api-contract.md       # Inter-agent communication & API contracts
├── bytebank-backend/         # Python + FastAPI modular monolith
│   ├── AGENT.md              # Backend agent guidelines (Security, Async, DB, Structure)
│   ├── pyproject.toml        # Dependencies & package configuration
│   ├── src/                  # Application modules (identity, accounts, payments, policy)
│   └── main.py               # Application entrypoint
└── bytebank-frontend/        # TypeScript frontend application
    ├── AGENT.md              # Frontend agent guidelines (Design taste, trust/security UI)
    ├── skills-lock.json      # Locked agent skills (design-taste-frontend)
    └── app/                  # React / Next.js web application
```

---

## Core Engineering Principles

1. **Identity is Independent of Blockchain:** Bytebase owns the stable Agent ID. Stellar addresses are execution endpoints, not the agent's identity.
2. **Never Trust the Model for Authorization:** Financial limits, velocity rules, and whitelists must be deterministically enforced by backend and smart account policies outside the LLM.
3. **Cryptographic Authentication:** Agent requests must be signed with registered credentials, accompanied by nonces and timestamps to prevent replays.
4. **Modular Monolith First:** Maintain strict domain module boundaries inside FastAPI without premature microservice distribution.
5. **High-Trust Visual Design:** Frontend components must adhere to the `design-taste-frontend` skill, emphasizing institutional credibility, security, and precision.
6. **Bytecript Digital ID Card:** The agent's digital identity credential card held in Bytebase and presented in Bytebank. Always represent Bytecript with institutional trust, security, precision, and verification clarity.
