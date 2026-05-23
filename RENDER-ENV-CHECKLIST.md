# Render — environment variables to paste

When Render asks for secret values during Blueprint deploy, copy from your **local** `.env` files.

## Backend (`virtual-ui-api`)

| Variable | Copy from |
|----------|-----------|
| `MONGODB_URL` | `virtual-ui-server/.env` |
| `JWT_SECRET` | `virtual-ui-server/.env` |
| `OPENROUTER_API_KEY` | `virtual-ui-server/.env` |
| `RAZORPAY_KEY_ID` | `virtual-ui-server/.env` |
| `RAZORPAY_KEY_SECRET` | `virtual-ui-server/.env` |

`CLIENT_URL` and `NODE_ENV` are set automatically by the blueprint.

## Frontend (`virtual-ui-web`)

| Variable | Copy from |
|----------|-----------|
| `VITE_FIREBASE_APIKEY` | `virtual-ui-client/.env` |
| `VITE_RAZORPAY_KEY_ID` | `virtual-ui-client/.env` |

`VITE_API_URL` is set automatically from the API service URL.

## After deploy

1. **MongoDB Atlas** → Network Access → allow `0.0.0.0/0`
2. **Firebase** → Authorized domains → add `virtual-ui-web.onrender.com` (your actual hostname)
3. Sign in on live site → run `npm run make-admin -- your@gmail.com` locally if needed
