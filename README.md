# Virtual UI

Full-stack React app for AI-powered UI component generation, with Express API, MongoDB, Firebase auth, and Razorpay payments.
Deployed Link:https://virtual-ui-web.onrender.com

Virtual UI — AI-Powered React Component Library Platform
Virtual UI is a full-stack web application for building, previewing, and distributing production-ready React UI components. It combines a published npm component library with an AI-assisted generator so developers can use prebuilt blocks (buttons, navbars, pricing cards, charts, and more) or describe custom UIs in natural language and receive copy-paste-ready JSX. The product is aimed at speeding up frontend work while keeping code clean, prop-driven, and easy to integrate into real projects.

Problem and solution
Modern frontends spend significant time on repetitive UI patterns. Virtual UI addresses this with two paths: a curated component library installable via npm, and an AI generator that turns prompts into React components with live preview, editable props, and exportable code. An admin workflow supports saving components to a database, publishing them to the public gallery, and syncing approved components into the library for npm distribution—bridging internal tooling and open consumption.

Technical architecture
The system uses a MERN-style architecture with clear separation of concerns:

Frontend: React 19, Vite, Tailwind CSS v4, Redux Toolkit, React Router, Framer Motion, and react-live for in-browser component preview without a full rebuild cycle.
Backend: Node.js and Express 5 REST API with JWT authentication via HTTP-only cookies, MongoDB (Mongoose) for users and component metadata, and modular routes for auth, users, components, and payments.
Component library: A standalone package (virtual-ui-lib) built with tsup, exporting 25+ reusable components for consumption in any React 18+ app.
Integrations: Firebase Authentication (Google sign-in), OpenRouter API (LLM-based code generation with structured JSON output), and Razorpay for test-mode payments and AI credit top-ups.
Deployment targets Render (static frontend + Node web service) with environment-based API URLs, production CORS and cookie settings, MongoDB Atlas, and Firebase authorized domains for production auth.

Core features
Authentication and roles: Google OAuth through Firebase; backend session cookies; role-based access (user vs admin) with credit limits for AI usage (e.g., 150 starter credits, 50 per generation for standard users).

Component explorer: Public gallery of components with search, live preview, source view, and npm install/import guides—backed by MongoDB records with public visibility.

AI component generator: Prompt → OpenRouter → validated JSON (name, code, props) → live sandbox preview → save to personal library or publish (admin).

Admin dashboard: Manage users and components, save drafts, publish to npm (filesystem write, library build, version bump, npm publish), and enforce duplicate-name rules for public components.

Monetization: Pricing page with Razorpay checkout; server-side payment verification; credit grants on successful payment.

Developer experience: Seed scripts to sync library sources into the database, CLI to promote admins, .env-driven configuration, and documentation for local setup and cloud deploy.

Skills demonstrated
This project shows end-to-end product development: REST API design, secure auth, third-party API integration (AI, payments, OAuth), state management, responsive UI, npm package workflow, and production deployment with environment parity. It also reflects attention to real-world details—CORS, cookie policies on HTTPS, SPA routing on static hosts, and build optimizations for hosted frontends.

Resume-ready one-liner
Built Virtual UI, a full-stack React platform with 25+ npm components, AI-powered UI generation (OpenRouter), Firebase/Google auth, MongoDB, Razorpay payments, and admin publish-to-npm workflow—deployed on Render.

## Project structure

```
virtual-ui/
├── virtual-ui-client/   # React + Vite frontend (port 5173)
├── virtual-ui-server/   # Express API (port 8000)
└── virtual-ui-lib/      # Shared component library (optional build)
```















