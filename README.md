# Virtual UI

Full-stack React app for AI-powered UI component generation, with Express API, MongoDB, Firebase auth, and Razorpay payments.
Deployed Link:https://virtual-ui-web.onrender.com

Project Overview

Virtual UI is a full-stack web platform for building, previewing, and distributing production-ready React UI components. The platform combines a reusable npm component library with an AI-powered component generator that converts natural language prompts into ready-to-use JSX components.

Developers can either:

Install prebuilt UI components from the npm package
Generate custom React components using AI prompts
Preview and edit components live before exporting

The platform is designed to accelerate frontend development while maintaining clean, reusable, and prop-driven component architecture.

Problem Statement

Frontend developers spend significant time recreating common UI patterns such as buttons, navbars, pricing cards, dashboards, modals, and forms.

This repetitive work slows development and reduces productivity.

Solution

Virtual UI solves this problem through two integrated systems:

1. Reusable Component Library

A standalone npm package containing reusable production-ready React components.

2. AI Component Generator

An AI-assisted interface where users describe UI components in natural language and instantly receive:

Generated JSX code
Live preview
Editable props
Copy-paste-ready React components

The platform also includes an admin workflow for reviewing, publishing, and syncing components into the public library.

Technical Architecture
Frontend

Built using:

React 19
Vite
Tailwind CSS v4
Redux Toolkit
React Router
Framer Motion
react-live
Frontend Features
Live component rendering
Real-time JSX preview
Responsive UI
Dynamic routing
State management
Animation system
Backend

Built using:

Node.js
Express 5
MongoDB Atlas
Mongoose
JWT Authentication
HTTP-only cookies
Backend Responsibilities
User authentication
Component storage
API management
Role-based access control
Payment verification
AI generation requests
Component Library

A standalone npm package (virtual-ui-lib) built using:

TypeScript
tsup bundler
Library Features
25+ reusable React components
Tree-shakable exports
Easy npm installation
React 18+ compatibility
Reusable prop-driven architecture
Third-Party Integrations
Firebase Authentication

Used for:

Google Sign-In
OAuth authentication
OpenRouter API

Used for:

AI-powered React component generation
Structured JSON-based component output
Razorpay

Used for:

Test-mode payment integration
Credit purchase system
Secure payment verification
Core Features
Authentication & Authorization
Google OAuth login
JWT session handling
HTTP-only secure cookies
Role-based access (User/Admin)
AI Component Generator

Workflow:
Prompt → OpenRouter API → Structured JSON → Live Preview → Exportable JSX

Features
Natural language UI generation
Live sandbox rendering
Editable props
Save generated components
Publish approved components
Component Explorer

Public gallery featuring:

Search functionality
Live component preview
Source code view
Installation guides
npm import examples
Admin Dashboard

Admin capabilities include:

Manage users
Review components
Publish components
Prevent duplicate component names
Sync components to npm package
Save drafts
Monetization System
Razorpay payment gateway
AI credit system
Credit top-up functionality
Payment verification APIs
Developer Experience

Additional tooling includes:

Database seed scripts
Admin promotion CLI
Environment-based configuration
Deployment documentation
Library sync scripts
Deployment & Production Setup
Deployment Platforms
Render (Frontend + Backend)
MongoDB Atlas
Firebase Production Auth
Production Features
Environment-based API configuration
HTTPS cookie support
Production CORS setup
SPA routing configuration
Optimized builds
Skills Demonstrated
Frontend Development
React Architecture
Component Design Systems
State Management
Responsive UI Design
Live Component Rendering
Backend Development
REST API Design
Authentication & Authorization
Database Modeling
Secure Cookie Sessions
Integrations
AI APIs
OAuth Authentication
Payment Gateway Integration
DevOps & Deployment
Cloud Deployment
Environment Management
Production Configuration
npm Package Publishing
Resume-Ready Description
Short Version

Built Virtual UI, a full-stack React platform featuring an AI-powered UI generator, reusable npm component library, Firebase authentication, Razorpay payments, MongoDB backend, and admin publish-to-npm workflow.

One-Line Resume Version

Built Virtual UI — an AI-powered React component platform with 25+ reusable npm components, OpenRouter-based UI generation, Firebase Google auth, Razorpay payments, and full-stack MERN architecture deployed on Render.

Tech Stack
Frontend
React 19
Vite
Tailwind CSS v4
Redux Toolkit
Framer Motion
Backend
Node.js
Express 5
MongoDB
Mongoose
JWT
Integrations
Firebase Auth
OpenRouter API
Razorpay
Deployment
Render
MongoDB Atlas
npm Registry
```
virtual-ui/
├── virtual-ui-client/   # React + Vite frontend (port 5173)
├── virtual-ui-server/   # Express API (port 8000)
└── virtual-ui-lib/      # Shared component library (optional build)
```















