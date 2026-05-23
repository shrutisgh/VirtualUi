# Deploy Virtual UI on Render (beginner guide)

You will create **2 services** on [Render](https://render.com):

1. **Backend** (API) — Node.js Web Service  
2. **Frontend** (website) — Static Site  

MongoDB stays on **MongoDB Atlas** (you already use it). Firebase stays on **Google Firebase**.

---

## Before you start (checklist)

- [ ] [GitHub](https://github.com) account (free)
- [ ] [Render](https://render.com) account (free — sign up with GitHub)
- [ ] MongoDB Atlas cluster working (your `MONGODB_URL`)
- [ ] Firebase project `virtualui-aa296` with Google sign-in enabled
- [ ] Your `.env` keys ready (copy from local files — **never commit `.env` to GitHub**)

---

## Part 1 — Put your code on GitHub

Render deploys from GitHub. Do this once.

### 1.1 Create a new repository on GitHub

1. Go to https://github.com/new  
2. Name it e.g. `virtual-ui`  
3. Choose **Private** (recommended — has API keys in env on Render, not in code)  
4. Click **Create repository** (do not add README if asked)

### 1.2 Push your project from your PC

Open **PowerShell** in the folder that contains `virtual-ui`:

```powershell
cd a:\Downloads\VirtualUI\virtual-ui
```

Create `.gitignore` if needed (so secrets and `node_modules` are not uploaded):

```powershell
@"
node_modules/
.env
.env.local
dist/
.DS_Store
"@ | Out-File -Encoding utf8 .gitignore
```

Initialize Git and push:

```powershell
git init
git add .
git commit -m "Initial commit - Virtual UI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/virtual-ui.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

> **Important:** Only push code. Your `.env` files should **not** appear in the commit (`git status` should not list `.env`).

---

## Part 2 — Deploy the BACKEND (API) on Render

### 2.1 Create Web Service

1. Log in to https://dashboard.render.com  
2. Click **New +** → **Web Service**  
3. Connect your GitHub account if asked  
4. Select repository **`virtual-ui`**  
5. Fill in:

| Field | Value |
|--------|--------|
| **Name** | `virtual-ui-api` (or any name) |
| **Region** | Choose closest to you (e.g. Singapore) |
| **Branch** | `main` |
| **Root Directory** | `virtual-ui-server` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | Free |

### 2.2 Environment variables (backend)

Scroll to **Environment Variables** → **Add Environment Variable** for each:

| Key | Value (example) |
|-----|------------------|
| `NODE_ENV` | `production` |
| `PORT` | `10000` (Render sets `PORT` automatically — you can also leave Render’s default) |
| `MONGODB_URL` | Your Atlas connection string (same as local `.env`) |
| `JWT_SECRET` | Same as local |
| `OPENROUTER_API_KEY` | Same as local |
| `RAZORPAY_KEY_ID` | Same as local |
| `RAZORPAY_KEY_SECRET` | Same as local |
| `CLIENT_URL` | Leave empty for now — fill after frontend is deployed |

Click **Create Web Service**.

Wait until status is **Live**. Copy your API URL, e.g.:

`https://virtual-ui-api.onrender.com`

Test in browser: open that URL → you should see JSON like `ExamNotes AI Backend Running`.

### 2.3 MongoDB Atlas — allow Render

1. [MongoDB Atlas](https://cloud.mongodb.com) → your cluster → **Network Access**  
2. **Add IP Address** → **Allow Access from Anywhere** (`0.0.0.0/0`)  
   - Required for Render free tier (IPs change)  
3. Save  

---

## Part 3 — Deploy the FRONTEND on Render

### 3.1 Create Static Site

1. **New +** → **Static Site**  
2. Same repo **`virtual-ui`**  
3. Fill in:

| Field | Value |
|--------|--------|
| **Name** | `virtual-ui-web` |
| **Branch** | `main` |
| **Root Directory** | `virtual-ui-client` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### 3.2 Environment variables (frontend)

These are baked in at **build time** (Vite):

| Key | Value |
|-----|--------|
| `VITE_API_URL` | `https://virtual-ui-api.onrender.com` (your backend URL from Part 2 — **no trailing slash**) |
| `VITE_FIREBASE_APIKEY` | Same as local client `.env` |
| `VITE_RAZORPAY_KEY_ID` | Same as local |

Click **Create Static Site**.

When deploy finishes, copy your site URL, e.g.:

`https://virtual-ui-web.onrender.com`

### 3.3 SPA routing (React routes)

After first deploy:

1. Open your **Static Site** on Render → **Redirects/Rewrites**  
2. Add rule:  
   - **Source:** `/*`  
   - **Destination:** `/index.html`  
   - **Action:** **Rewrite**  

(This fixes 404 when refreshing `/admin`, `/component`, etc.)

---

## Part 4 — Connect frontend and backend

### 4.1 Update backend `CLIENT_URL`

1. Render → **virtual-ui-api** (Web Service) → **Environment**  
2. Set `CLIENT_URL` = your frontend URL, e.g. `https://virtual-ui-web.onrender.com`  
3. Save → Render will redeploy automatically  

### 4.2 Firebase — allow your live site

1. [Firebase Console](https://console.firebase.google.com/) → project **virtualui-aa296**  
2. **Authentication** → **Settings** → **Authorized domains**  
3. **Add domain** → `virtual-ui-web.onrender.com` (your Render site hostname, without `https://`)  

### 4.3 Make yourself admin on production DB

Your production app uses the **same MongoDB** as local (if same `MONGODB_URL`).

After you **Sign in with Google** on the live site once, run locally:

```powershell
cd a:\Downloads\VirtualUI\virtual-ui\virtual-ui-server
npm run make-admin -- shcode935@gmail.com
```

(Use your Google email.)

---

## Part 5 — Test the live app

1. Open `https://virtual-ui-web.onrender.com`  
2. Sign in with Google  
3. Visit **/component** — public components should load  
4. Try **/generate** — needs OpenRouter key on backend  
5. Admin: **/admin** (if your user is admin)  

---

## Free tier notes (important for beginners)

| Topic | What to expect |
|--------|----------------|
| **Cold start** | Free API sleeps after ~15 min idle. First request may take **30–60 seconds**. |
| **Two URLs** | Frontend and backend are different addresses — that is normal. |
| **Redeploy** | After changing env vars on **Static Site**, click **Manual Deploy** → **Clear build cache & deploy** so Vite picks up new `VITE_*` values. |
| **Secrets** | Set keys only in Render dashboard, never in GitHub code. |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Login works locally but not on Render | Check `CLIENT_URL` on API matches frontend URL exactly. Redeploy API after changing it. |
| CORS error in browser console | Same as above + confirm `VITE_API_URL` is correct and rebuild frontend. |
| Firebase `auth/unauthorized-domain` | Add Render domain in Firebase authorized domains. |
| MongoDB connection failed | Atlas → Network Access → allow `0.0.0.0/0`. Check `MONGODB_URL` on Render. |
| 404 on `/admin` refresh | Add SPA rewrite rule (Part 3.3). |
| API very slow first time | Free tier cold start — wait and retry. |
| Cookies / not staying logged in | Ensure API has `NODE_ENV=production` and you redeployed after code updates. |

---

## Quick reference — what goes where

```
GitHub repo: virtual-ui/
├── virtual-ui-server/   → Render Web Service (npm start)
└── virtual-ui-client/   → Render Static Site (npm run build → dist)

MongoDB Atlas     → MONGODB_URL on API only
Firebase Console  → Google auth + authorized domains
Render API env    → MONGODB_URL, JWT, OpenRouter, Razorpay, CLIENT_URL, NODE_ENV
Render Web env    → VITE_API_URL, VITE_FIREBASE_APIKEY, VITE_RAZORPAY_KEY_ID
```

---

## Optional: upgrade later

- **Custom domain** — Render → your service → **Settings** → **Custom Domains**  
- **Paid plan** — removes cold starts on API  
- **Separate production database** — use a different `MONGODB_URL` for production  

---

If you tell me your GitHub username and chosen service names, the exact URLs in this guide can be filled in for your deployment.
