import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Signup Function
document.getElementById("signup-btn")?.addEventListener("click", async function () { 
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const name = document.getElementById("signup-name").value; // Make sure your HTML has an input field for name

    try {
        // ✅ Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // ✅ Save user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            createdAt: new Date()
        });

        alert("✅ Signup successful!");
        window.location.href = "dashboard.html"; // Redirect user to the dashboard
    } catch (error) {
        alert("❌ Error: " + error.message);
    }
});

// Login Function
document.getElementById("login-btn")?.addEventListener("click", async function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Login successful!");
        console.log("User:", userCredential.user);
        document.getElementById("logout-btn").style.display = "block"; // Show Logout Button

        // Redirect to dashboard after successful login
        window.location.href = "dashboard.html";
    } catch (error) {
        alert("❌ Error: " + error.message);
    }
});

// Logout Function
document.getElementById("logout-btn")?.addEventListener("click", async function () {
    try {
        await signOut(auth);
        alert("✅ Logged out successfully!");
        document.getElementById("logout-btn").style.display = "none"; // Hide Logout Button
        window.location.href = "index.html";
    } catch (error) {
        alert("❌ Error: " + error.message);
    }
});
