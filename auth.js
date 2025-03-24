import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Signup Function
document.getElementById("signup-btn")?.addEventListener("click", function () { 
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("✅ Signup successful!");
            window.location.href = "dashboard.html"; // Redirect user to the dashboard
        })
        .catch((error) => {
            alert("❌ Error: " + error.message);
        });
});


// Login Function
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("✅ Login successful!");
            console.log("User:", userCredential.user);
            document.getElementById("logout-btn").style.display = "block"; // Show Logout Button

            // Redirect to dashboard after successful login
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("❌ Error: " + error.message);
        });
});


// Logout Function
document.getElementById("logout-btn").addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            alert("✅ Logged out successfully!");
            document.getElementById("logout-btn").style.display = "none"; // Hide Logout Button
        })
        .catch((error) => {
            alert("❌ Error: " + error.message);
        });
});
