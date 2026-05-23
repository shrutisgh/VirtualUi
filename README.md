# Virtual UI

Full-stack React app for AI-powered UI component generation, with Express API, MongoDB, Firebase auth, and Razorpay payments.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (tested with v24)
- npm 9+
- MongoDB Atlas cluster (or local MongoDB URI)
- Firebase project (Google sign-in)
- OpenRouter API key (AI component generation)
- Razorpay test keys (payments — optional for basic browsing)

## Project structure

```
virtual-ui/
├── virtual-ui-client/   # React + Vite frontend (port 5173)
├── virtual-ui-server/   # Express API (port 8000)
└── virtual-ui-lib/      # Shared component library (optional build)
```

## Quick start

### 1. Install dependencies

Open two terminals, or run from the repo root:

```powershell
cd virtual-ui\virtual-ui-server
npm install

cd ..\virtual-ui-client
npm install
```

### 2. Configure environment variables

**Server** — copy the example and fill in your values:

```powershell
cd virtual-ui\virtual-ui-server
copy .env.example .env
```

**Client**:

```powershell
cd virtual-ui\virtual-ui-client
copy .env.example .env
```

| Variable | Where | Purpose |
|----------|-------|---------|
| `MONGODB_URL` | server | MongoDB connection string |
| `JWT_SECRET` | server | Auth token signing |
| `OPENROUTER_API_KEY` | server | AI code generation |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | server | Payment verification |
| `CLIENT_URL` | server | Frontend URL for CORS (default `http://localhost:5173`) |
| `VITE_FIREBASE_APIKEY` | client | Firebase web API key |
| `VITE_RAZORPAY_KEY_ID` | client | Razorpay checkout key |

Do not use spaces around `=` in `.env` files.

### 3. Run the backend

```powershell
cd virtual-ui\virtual-ui-server
npm run dev
```

You should see:

```
✅ Server running on port 8000
DB connected
```

API base URL: `http://localhost:8000`

### 4. Run the frontend

In a **second** terminal:

```powershell
cd virtual-ui\virtual-ui-client
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

If port 5173 is busy, Vite may use 5174 — the API accepts any `localhost` origin in development.

### 5. Verify

- Backend health: [http://localhost:8000](http://localhost:8000) → `{"message":"ExamNotes AI Backend Running 🚀"}`
- Frontend: open the Vite dev URL in your browser
- Sign in with Google (Firebase) to use authenticated features

## Optional: component library

```powershell
cd virtual-ui\virtual-ui-lib
npm install
npm run build
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `DB connected` never appears | Check `MONGODB_URL` and Atlas IP allowlist (`0.0.0.0/0` for dev) |
| CORS / cookies fail | Ensure frontend runs on `localhost` and `CLIENT_URL` matches Vite’s URL |
| Firebase auth errors | Confirm `VITE_FIREBASE_APIKEY` and Firebase console authorized domains include `localhost` |
| Port 8000 in use | Change `PORT` in server `.env` and update `ServerUrl` in `virtual-ui-client/src/App.jsx` |
| AI generation fails | Verify `OPENROUTER_API_KEY` on the server |

## Production build (client only)

```powershell
cd virtual-ui\virtual-ui-client
npm run build
npm run preview
```

Set `CLIENT_URL` on the server to your deployed frontend URL before production.
