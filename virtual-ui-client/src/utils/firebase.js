
// // import { initializeApp } from "firebase/app";
// // import {getAuth, GoogleAuthProvider} from "firebase/auth"

// // const firebaseConfig = {
// //   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
// //   authDomain: "virtualdemo-707f4.firebaseapp.com",
// //   projectId: "virtualdemo-707f4",
// //   storageBucket: "virtualdemo-707f4.firebasestorage.app",
// //   messagingSenderId: "850646440578",
// //   appId: "1:850646440578:web:77dbf5a3d5618c2c14729b"
// // };

// // const app = initializeApp(firebaseConfig);

// // const auth = getAuth(app)

// // const provider = new GoogleAuthProvider()

// // export {auth , provider}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8fgetBiTI0p6vGKIYkXBLVmiAvS413fA",
//   authDomain: "virtualui-aa296.firebaseapp.com",
//   projectId: "virtualui-aa296",
//   storageBucket: "virtualui-aa296.firebasestorage.app",
//   messagingSenderId: "1025190258520",
//   appId: "1:1025190258520:web:148805da94d3f8f8e9272d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtualui-aa296.firebaseapp.com",
  projectId: "virtualui-aa296",
  storageBucket: "virtualui-aa296.firebasestorage.app",
  messagingSenderId: "1025190258520",
  appId: "1:1025190258520:web:148805da94d3f8f8e9272d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Google Provider
const provider = new GoogleAuthProvider();

// Export
export { auth, provider };