# Virtual UI

**Virtual UI** is an innovative web platform that empowers users to generate modern UI components using AI. It is designed as a full-stack application with a focus on extensibility and ease of use for both end-users and developers.

---

## ✨ What is Virtual UI?

Virtual UI lets anyone — from designers to developers — describe a UI component they want, and instantly get code snippets or live previews powered by artificial intelligence. Whether you’re prototyping, learning, or designing at scale, Virtual UI bridges the gap between ideas and functional UI code.

**Key highlights:**
- **AI-powered UI generation:** Generate React components by describing what you need in natural language.
- **Preview and tweak:** Instantly preview generated components and tailor them to your requirements.
- **Authentication:** Secure login using Google via Firebase.
- **Optional payments:** Upgrade for premium features using Razorpay (only needed for advanced use-cases).

---

## 🏗️ Architecture Overview

The project is structured as a monorepo with three main parts:

```
virtual-ui/
├── virtual-ui-client/   # Frontend: React + Vite (port 5173)
├── virtual-ui-server/   # Backend: Node.js (Express API, port 8000)
└── virtual-ui-lib/      # Shared component library (utilities, types, etc.)
```

- **Frontend**: Delivers a fast, reactive user interface. Handles authentication, interacts with the backend, and displays results.
- **Backend**: Handles API requests, proxies AI queries to OpenRouter, manages user data in MongoDB, and processes payments.
- **Shared library**: Contains reusable code/components for both frontend and backend.

---

## 🚀 Features

- **Natural Language to UI:** Use OpenRouter’s AI engine to convert prompts into usable React UI code.
- **Full Authentication Flow:** Built-in Google Sign-In via Firebase ensures secure access and a frictionless user experience.
- **Database Support:** Data stored securely on MongoDB Atlas or any MongoDB-compatible database.
- **Flexible Payments:** Razorpay integration enables monetization of advanced features (payments are optional for basic features).
- **Easy Deployment:** Works on any platform supporting Node.js, from Render and Vercel to your own server.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (tested with v24)
- npm 9 or above
- Access to a [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster *or* a local MongoDB server
- A [Firebase](https://firebase.google.com/) project with Google authentication enabled
- An [OpenRouter](https://openrouter.ai/) API key
- (Optional) [Razorpay](https://razorpay.com/docs/) test keys for payment features

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shrutisgh/VirtualUi.git
   cd VirtualUi
   ```

2. **Install dependencies**
   ```bash
   cd virtual-ui-client
   npm install
   cd ../virtual-ui-server
   npm install
   ```

3. **Provide Environment Variables**

   - Create a `.env` file in each of `virtual-ui-client` and `virtual-ui-server`, with the necessary API keys and config values.

   *Example for backend (`virtual-ui-server/.env`):*
   ```
   PORT=8000
   MONGODB_URI=your_mongo_uri
   OPENROUTER_API_KEY=your_openrouter_key
   FIREBASE_API_KEY=your_firebase_key
   RAZORPAY_KEY=your_razorpay_key  # optional
   ```

4. **Run the servers**

   - **Start the backend (API):**
     ```bash
     cd virtual-ui-server
     npm run dev
     ```

   - **Start the frontend:**
     ```bash
     cd virtual-ui-client
     npm run dev
     ```

   The frontend will be available at [http://localhost:5173](http://localhost:5173)  
   The backend API will be at [http://localhost:8000](http://localhost:8000)

---

## 🌐 Live Demo

Experience the live app:  
[https://virtual-ui-web.onrender.com](https://virtual-ui-web.onrender.com)

---

## 🤝 Contribution

Contributions, ideas, and feedback are welcome!  
Feel free to fork this repo, create issues, or submit pull requests to improve the project.

---

## 📜 License

This project is licensed under the MIT License.

---

For more details, explore the repo or reach out via GitHub Issues!
