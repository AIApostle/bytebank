# Inter-Agent Communication & API Contract

**File:** `Work/api-contract.md`  
**Purpose:** Shared coordination file and API contract specification between the **Backend Agent** (`bytebank-backend`) and **Frontend Agent** (`bytebank-frontend`).  
**Rules:**
1. This is the **only** shared documentation file that both Backend and Frontend agents are allowed to edit across domain boundaries.
2. When the Frontend Agent needs an API endpoint, field, or behavioral change, it posts a request in the **Coordination Board** below.
3. When the Backend Agent completes, updates, or adjusts an endpoint or contract, it documents the schema and marks the request as ready.

---

## 1. Active Coordination Board

### A. Requests from Frontend Agent -> Backend Agent

| ID | Request Summary | Requested Endpoint / Action | Status | Notes / Blockers |
| :--- | :--- | :--- | :--- | :--- |
| `FE-REQ-001` | Agent Registration & Initial Key Binding | `POST /api/v1/agents` | `PROPOSED` | Needs controller ID, name, description, and initial public key payload. |
| `FE-REQ-002` | Bytecript Digital ID Card Payload | `GET /api/v1/agents/{id}/bytecript` | `PROPOSED` | Returns full Bytecript card data: Agent ID, residence, status, public key fingerprint, QR payload. |
| `FE-REQ-003` | Identity Resolution (Public Lookup) | `GET /api/v1/identity/resolve?agent_id=...` | `PROPOSED` | Public rate-limited lookup returning safe claims and linked payment destination. |
| `FE-REQ-004` | Provision & Fund Stellar Smart Account | `POST /api/v1/accounts/provision` & `POST /api/v1/accounts/fund` | `PROPOSED` | Provisions Soroban smart account for Agent ID and triggers Testnet Friendbot funding. |
| `FE-REQ-005` | Spending Policy Configuration & Checks | `PUT /api/v1/policies/{agent_id}` | `PROPOSED` | Configure max per-tx limit, velocity limits, and asset whitelists. |
| `FE-REQ-006` | Agent-to-Agent Payment Submission | `POST /api/v1/payments` | `PROPOSED` | Signed payment challenge submission with recipient resolution and policy rejection handling. |
| `FE-REQ-007` | Transaction History & Audit Ledger | `GET /api/v1/transactions?agent_id=...` | `PROPOSED` | List transactions with Stellar tx hash, explorer link, and status (`CONFIRMED`, `REJECTED_BY_POLICY`). |

---

### B. Notices / Updates from Backend Agent -> Frontend Agent

| ID | Target / Feature | Change Summary | Impact on Frontend |
| :--- | :--- | :--- | :--- |
| `BE-NOT-001` | Base API URL | Base URL is configured at `http://localhost:8000` (FastAPI) with OpenAPI docs at `/docs`. | Configure Vite / Next.js proxy or environment variable `NEXT_PUBLIC_API_URL` / `VITE_API_URL`. |
| `BE-NOT-002` | Error Format | All policy and validation errors return standard RFC 7807 problem details with `code`, `message`, and `detail`. | Parse `error.code` (e.g. `ERR_POLICY_EXCEEDED_TRANSACTION_LIMIT`) to show distinct UI error alerts. |

---

## 2. Baseline API Contracts (FastAPI / OpenAPI)

### 2.1 Agent Identity & Bytecript (`Bytebase`)

#### `POST /api/v1/agents`
**Request Body:**
```json
{
  "name": "Arbiter-01",
  "description": "Autonomous market analysis agent",
  "primary_network": "main",
  "public_key": "ed25519_pk_7fa3bc89...",
  "algorithm": "Ed25519",
  "controller_account_id": "usr_99824"
}
```

**Response Body (`201 Created`):**
```json
{
  "agent_id": "agent_01h8x4k2m9p7...",
  "name": "Arbiter-01",
  "primary_network": "main",
  "residence_id": "res_01h8x4k2...",
  "status": "active",
  "created_at": "2026-11-21T12:00:00Z",
  "bytecript": {
    "card_version": "1.0",
    "agent_id": "agent_01h8x4k2m9p7...",
    "display_name": "Arbiter-01",
    "network_name": "main",
    "status": "active",
    "public_key_fingerprint": "7fa3bc89...a01f",
    "verification_endpoint": "/api/v1/identity/resolve?agent_id=agent_01h8x4k2m9p7...",
    "issued_at": "2026-11-21T12:00:00Z"
  }
}
```

#### `GET /api/v1/agents/{id}/bytecript`
**Response Body (`200 OK`):**
```json
{
  "agent_id": "agent_01h8x4k2m9p7...",
  "display_name": "Arbiter-01",
  "description": "Autonomous market analysis agent",
  "network_namespace": "main",
  "status": "active",
  "public_key": "ed25519_pk_7fa3bc89...",
  "algorithm": "Ed25519",
  "fingerprint": "7fa3bc89...a01f",
  "linked_account_address": "GBZX...STELLAR",
  "issued_at": "2026-11-21T12:00:00Z"
}
```

---

### 2.2 Financial Accounts & Payments (`Bytebank` on Stellar)

#### `POST /api/v1/payments`
**Request Body:**
```json
{
  "sender_agent_id": "agent_01h8x4k2m9p7...",
  "recipient_identifier": "agent_02k91m5p...",
  "amount": "15.0000000",
  "asset_code": "XLM",
  "challenge_nonce": "non_89a1f24d...",
  "agent_signature": "sig_ed25519_88a..."
}
```

**Success Response (`200 OK`):**
```json
{
  "transaction_id": "tx_99812",
  "status": "CONFIRMED",
  "sender_agent_id": "agent_01h8x4k2m9p7...",
  "recipient_agent_id": "agent_02k91m5p...",
  "recipient_address": "GCDA...STELLAR",
  "amount": "15.0000000",
  "asset_code": "XLM",
  "stellar_tx_hash": "f68a73b9e84...",
  "ledger_timestamp": "2026-11-21T12:05:00Z",
  "stellar_explorer_url": "https://stellar.expert/explorer/testnet/tx/f68a73b9e84..."
}
```

**Policy Rejection Response (`403 Forbidden`):**
```json
{
  "code": "ERR_POLICY_EXCEEDED_TRANSACTION_LIMIT",
  "message": "Payment amount 500.0000000 XLM exceeds configured agent limit of 25.0000000 XLM",
  "policy_breached": {
    "limit_type": "MAX_PER_TRANSACTION",
    "allowed_max": "25.0000000",
    "attempted_amount": "500.0000000"
  },
  "audit_event_id": "evt_99120"
}
```
