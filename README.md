# ⚡ BlockVolt

### Decentralized Document Vault · Web3 · IPFS · Ethereum

<p align="center">
  <strong>Secure document storage designed around decentralized ownership, content-addressed storage, and blockchain verification.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Web3-Ethereum-627EEA?style=for-the-badge&logo=ethereum&logoColor=white" alt="Ethereum">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/ethers.js-Web3-2535A0?style=for-the-badge" alt="ethers.js">
  <img src="https://img.shields.io/badge/IPFS-Decentralized%20Storage-65C2CB?style=for-the-badge&logo=ipfs&logoColor=white" alt="IPFS">
  <img src="https://img.shields.io/badge/Flask-Python-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
</p>

---

## 📌 Overview

**BlockVolt** is a Web3-oriented document-vault project that explores how important digital documents can be managed using a combination of **blockchain-based metadata, wallet identity, and decentralized file storage**.

Instead of placing large documents directly on a blockchain, the architecture separates the storage and verification responsibilities:

- **IPFS** is intended for content-addressed document storage.
- **Ethereum-compatible smart contracts** are intended to store verifiable document metadata.
- **MetaMask** provides wallet-based user identity and transaction authorization.
- **ethers.js** connects the browser application to the blockchain.
- **Flask/Python** provides the backend integration layer.

> **Design principle:** store the file off-chain and use blockchain for verifiable metadata, ownership, and integrity-related records.

---

## 🎯 Problem Statement

Conventional document-management systems typically depend on centralized servers and databases.

This creates several challenges:

- Centralized control over document records
- Dependence on a single storage provider
- Difficulty proving the integrity/history of a document independently
- Limited user ownership of document records
- Expensive and inefficient storage if large files are placed directly on-chain

BlockVolt explores a hybrid architecture designed to address these limitations.

---

## 💡 Proposed Solution

```text
                         ┌──────────────────────┐
                         │        USER          │
                         │   Browser + Wallet   │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      FRONTEND        │
                         │ HTML / CSS / JS      │
                         │ Three.js / ethers.js │
                         └───────┬───────┬──────┘
                                 │       │
                          Upload │       │ Web3
                                 ▼       ▼
                         ┌──────────┐ ┌─────────────┐
                         │  Flask   │ │  Ethereum   │
                         │ Backend  │ │  Contract   │
                         └────┬─────┘ └──────┬──────┘
                              │              │
                              ▼              │
                         ┌──────────┐        │
                         │ IPFS /   │◄───────┘
                         │ Pinata   │
                         └──────────┘
```

### Document flow

```text
Select Document
      ↓
Frontend Upload
      ↓
Backend / IPFS Layer
      ↓
IPFS CID
      ↓
Blockchain Metadata
      ↓
Wallet Transaction
      ↓
Verifiable Document Record
```

---

## ✨ Key Features

### 🔐 Wallet-based access
The frontend detects `window.ethereum` and uses `ethers.js` to connect a browser wallet such as MetaMask.

### 📁 Decentralized document storage
The architecture uses IPFS/Pinata for content-addressed document storage instead of putting large files directly on Ethereum.

### ⛓️ Blockchain metadata
The frontend contains Web3 integration for saving and retrieving document metadata through a smart-contract interface.

### 🔎 Document retrieval
Stored CIDs can be converted into IPFS gateway URLs so that documents can be retrieved using their content identifier.

### 🗂️ Document categories
The interface provides document categories such as:

- Aadhaar
- PAN
- Driving License
- Passport
- General Documents

### 🎨 Interactive Web3 interface
The frontend includes:

- Dashboard
- Vault interface
- Wallet connection
- Upload interface
- Animated Three.js background
- Video/visual hero elements
- Document management UI

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Application structure |
| **CSS3** | UI design and responsive styling |
| **JavaScript** | Frontend logic |
| **Three.js** | 3D animated visual layer |
| **ethers.js** | Ethereum/Web3 communication |
| **MetaMask** | Wallet connection and transaction signing |
| **Python** | Backend language |
| **Flask** | Backend/API framework |
| **IPFS / Pinata** | Decentralized file storage |
| **Solidity** | Smart-contract layer |
| **Ethereum-compatible network** | Blockchain transaction layer |

---

## 🗂️ Project Structure

```text
BlockVolt/
├── backend/
│   ├── app.py
│   ├── blockchain/
│   │   ├── contract.py
│   │   └── wallet.py
│   ├── database/
│   │   └── models.py
│   ├── ipfs/
│   │   └── pinata.py
│   └── routes/
│       ├── upload.py
│       ├── user.py
│       └── verify.py
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── vault.html
│   ├── components/
│   ├── css/
│   ├── js/
│   │   ├── app.js
│   │   ├── wallet.js
│   │   ├── animations.js
│   │   ├── slider.js
│   │   └── three-bg.js
│   └── assets/
│
├── smart_contract/
│   └── Vault.sol
│
├── uploads/
├── requirements.txt
└── README.md
```

---

## 🔗 Web3 Integration

The supplied frontend uses `ethers.js` to request wallet access:

```javascript
const provider = new ethers.BrowserProvider(window.ethereum);
await provider.send("eth_requestAccounts", []);
```

The upload integration is designed around a flow similar to:

```javascript
contract.saveDoc(file.name, "GENERAL", cid);
```

and document retrieval through:

```javascript
contract.getDocs();
```

This connects the frontend document workflow with the blockchain layer.

---

## 🌐 IPFS Architecture

A decentralized storage implementation follows:

```text
Document
   │
   ▼
Flask Upload API
   │
   ▼
Pinata / IPFS
   │
   ▼
CID
   │
   ▼
Smart Contract
   │
   ▼
Document Metadata
```

The **CID** acts as a content-addressed reference to the uploaded document.

---

## 🚀 Running the Frontend

From the frontend directory:

```bash
cd frontend
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

A Web3 wallet such as MetaMask is required for wallet interaction.

---

## ⚠️ Current Repository Snapshot

The uploaded project snapshot contains the frontend, Web3 integration structure, and backend/blockchain project structure.

However, several backend and Solidity files in the supplied archive are currently empty or incomplete, including parts of:

- Flask backend
- API routes
- IPFS integration
- Blockchain helper modules
- `Vault.sol`
- `requirements.txt`

Therefore, this repository should be treated as a **Web3 project prototype / integration scaffold** until those missing implementations are restored.

This README deliberately does **not** claim those components are fully production-ready.

---

## 🔒 Security Considerations

Before production deployment, implement:

- File type and size validation
- Malware scanning
- Encryption for sensitive documents
- Smart-contract access control
- Chain/network validation
- Authentication and authorization
- Secure API credentials
- Transaction error handling
- Rate limiting
- Secure filename handling

### Never commit secrets

Do **not** upload:

```text
Private keys
Seed phrases
Wallet passwords
Pinata JWTs
RPC secrets
API keys
.env files containing credentials
```

Use an `.env.example` file instead.

---

## 🛣️ Future Roadmap

- [ ] Complete and audit Solidity contract
- [ ] Add document ownership mapping
- [ ] Add document hash verification
- [ ] Encrypt documents before IPFS upload
- [ ] Add QR-based verification
- [ ] Add secure document sharing
- [ ] Add transaction history
- [ ] Add document expiry/access controls
- [ ] Add automated smart-contract tests
- [ ] Add backend authentication
- [ ] Add deployment scripts
- [ ] Add CI/CD

---

## 🌟 Why BlockVolt?

BlockVolt demonstrates a practical Web3 architecture rather than simply putting files on a blockchain.

The central engineering idea is:

> **Large files belong in decentralized storage; blockchain is used where immutability, verification, and ownership records provide value.**

---

## 📄 License

Add an appropriate open-source license before publishing the repository publicly.
