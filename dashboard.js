import { auth } from "./firebase.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-email").innerText = `Logged in as: ${user.email}`;
    } else {
        // If not logged in, send them back to login page
        window.location.href = "index.html";
    }
});

// Logout Function
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Redirect after logout
    }).catch((error) => {
        alert("❌ Error: " + error.message);
    });
});
