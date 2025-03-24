import { auth, db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Check if user is logged in
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("✅ User is logged in:", user.uid);

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
            console.log("User Data:", userDoc.data());
            document.getElementById("user-name").innerText = `Welcome, ${userDoc.data().name}!`;
        } else {
            console.log("⚠️ No user data found in Firestore.");
        }
    } else {
        console.log("❌ No user logged in. Redirecting to login...");
        window.location.href = "login.html"; // Redirect if not authenticated
    }
});
