# Virtual UI — Full local setup (YouTube tutorial)

Follow this guide for the project in [REACT UI LIBRARY SOURCE CODE SETUP VIDEO](https://www.youtube.com/watch?v=9TlIr-sS6FM).

## 1. Prerequisites

- Node.js 18+
- MongoDB Atlas cluster (connection string in server `.env`)
- Firebase project `virtualui-aa296` with **Google** sign-in enabled
- [OpenRouter](https://openrouter.ai/) API key (AI generator)
- Razorpay **test** keys (pricing page — optional)

### Firebase Console (required for login)

1. [Firebase Console](https://console.firebase.google.com/) → project **virtualui-aa296**
2. **Authentication** → Sign-in method → enable **Google**
3. **Authentication** → Settings → **Authorized domains** → add `localhost`

## 2. Environment files

You already have keys in `.env`. Confirm:

**`virtual-ui-server/.env`**

```env
PORT=8000
CLIENT_URL=http://localhost:5173
MONGODB_URL=...
JWT_SECRET=...
OPENROUTER_API_KEY=...
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
```

**`virtual-ui-client/.env`** (one variable per line)

```env
VITE_FIREBASE_APIKEY=...
VITE_RAZORPAY_KEY_ID=...
```

## 3. One-time setup (all 3 packages)

From `virtual-ui` folder:

```powershell
cd a:\Downloads\VirtualUI\virtual-ui
npm run setup
```

This runs:

- `npm install` in **server**, **client**, and **lib**
- `npm run build` in **lib** (component library dist)
- `npm run seed` — imports all prebuilt components from `virtual-ui-lib` into MongoDB as **public**

## 4. Run the app (every time)

**Terminal 1 — API**

```powershell
cd a:\Downloads\VirtualUI\virtual-ui\virtual-ui-server
npm run dev
```

Wait for: `Server running on port 8000` and `DB connected`.

**Terminal 2 — UI**

```powershell
cd a:\Downloads\VirtualUI\virtual-ui\virtual-ui-client
npm run dev
```

Open **http://localhost:5173**

## 5. Admin access (tutorial ~MongoDB Compass step)

The video promotes your Google account to **admin** so you can use `/admin` and publish to npm.

1. Open the app → **Sign in with Google** once (creates your user in MongoDB).
2. Run (use your Google email):

```powershell
cd a:\Downloads\VirtualUI\virtual-ui\virtual-ui-server
npm run make-admin -- your@gmail.com
```

3. Refresh the app — you should redirect to **Admin Dashboard** (`/admin`).

**Alternative (as in video):** MongoDB Compass → database `DemoVirtualUi` → collection `users` → set `role` to `"admin"` for your document.

## 6. Verify everything works

| Step | What to check |
|------|----------------|
| API | http://localhost:8000 → JSON health message |
| Login | Google sign-in completes without Firebase error |
| Components | After login, go to **/component** → sidebar lists public components (from seed) |
| AI Generate | **/generate** → prompt → component preview (needs OpenRouter key) |
| Admin | **/admin** → save/publish components (admin only) |
| Payments | **/pricing** → Razorpay test checkout (test keys) |

## 7. Publish to npm (optional, end of tutorial)

Only if you want `npm publish` from Admin:

```powershell
cd a:\Downloads\VirtualUI\virtual-ui\virtual-ui-lib
npm login
```

Package name on npm is **`virtual-ui-component-lib`** (install with that name, or the UI’s `virtual-ui-lib` label is the product name).

## Troubleshooting

| Problem | Fix |
|---------|-----|
| No components on `/component` | Run `npm run seed` from `virtual-ui-server` |
| Not admin / no `/admin` | Run `npm run make-admin -- your@gmail.com` after Google sign-in |
| Firebase `auth/unauthorized-domain` | Add `localhost` in Firebase authorized domains |
| CORS errors | Use `localhost` (not `127.0.0.1`); set `CLIENT_URL` to match Vite URL |
| `framer-motion` import error | Run `npm install` in `virtual-ui-client` |
| AI generation fails | Check `OPENROUTER_API_KEY` in server `.env` |
