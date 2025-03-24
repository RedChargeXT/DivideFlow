import { db, auth } from "./firebase.js";
import { collection, addDoc, query, where, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 📝 Add Task Function
document.getElementById("add-task-btn").addEventListener("click", async () => {
    const taskInput = document.getElementById("task-input").value;
    const taskCategory = document.getElementById("task-category").value;
    
    if (!taskInput) {
        alert("❌ Please enter a task.");
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        alert("❌ Please log in first.");
        return;
    }

    try {
        await addDoc(collection(db, "tasks"), {
            userId: user.uid,
            text: taskInput,
            category: taskCategory,
            timestamp: new Date(),
        });
        document.getElementById("task-input").value = ""; // Clear input
    } catch (error) {
        console.error("Error adding task:", error);
        alert("❌ Failed to add task.");
    }
});

// 📝 Load Tasks in Real Time
const loadTasks = () => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(collection(db, "tasks"), where("userId", "==", user.uid));

    onSnapshot(q, (snapshot) => {
        // Clear all lists
        document.getElementById("task-list-1").innerHTML = "";
        document.getElementById("task-list-2").innerHTML = "";
        document.getElementById("task-list-3").innerHTML = "";
        document.getElementById("task-list-4").innerHTML = "";

        snapshot.forEach((doc) => {
            const task = doc.data();
            const li = document.createElement("li");
            li.textContent = task.text;

            document.getElementById(`task-list-${task.category}`).appendChild(li);
        });
    });
};

// 🛠 Listen for Auth Changes (Reload Tasks After Login)
auth.onAuthStateChanged((user) => {
    if (user) {
        loadTasks();
    }
});
