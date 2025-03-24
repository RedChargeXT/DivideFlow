// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDe_fZ_CylKnD96dyjxR8fwxq3du3aZAU",
    authDomain: "eisen-hower-matrix.firebaseapp.com",
    projectId: "eisen-hower-matrix",
    storageBucket: "eisen-hower-matrix.appspot.com",
    messagingSenderId: "940409444267",
    appId: "1:940409444267:web:efb800a966f287d89824ee",
    measurementId: "G-WQNMG62GRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Make sure Firestore is initialized

console.log("🔥 Firebase Initialized Successfully!");

// ✅ Export Firebase services
export { auth, db };
