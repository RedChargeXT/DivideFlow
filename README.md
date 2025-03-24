# **📌 DivideFlow - Task Management App**  

A simple **task management app** built with **Firebase Authentication, Firestore, and JavaScript**. Users can **sign up, log in, add, complete, and delete tasks** seamlessly.  

---

## **🚀 Features**  
✅ **User Authentication** (Signup, Login, Logout)  
✅ **Firestore Database** (Store & manage tasks)  
✅ **Add Tasks**  
✅ **Mark Tasks as Completed**  
✅ **Delete Tasks**  
✅ **Real-time Updates**  

---

## **🛠️ Setup Instructions**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/RedChargeXT/DivideFlow.git
cd DivideFlow
```

### **2️⃣ Install Dependencies**  
No external dependencies needed! Just use **Firebase**.

### **3️⃣ Setup Firebase**  
- Go to [Firebase Console](https://console.firebase.google.com/).  
- Create a new project.  
- Enable **Authentication** (Email/Password Sign-in).  
- Enable **Firestore Database** (Set rules to allow read/write for authenticated users).  

### **4️⃣ Add Firebase Config**  
- Inside your project, create a `firebase.js` file.  
- Add your Firebase credentials:  

```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔹 Your Firebase Config (Replace with your credentials)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### **5️⃣ Run the Project**  
Simply open `index.html` in your browser.

---

## **📂 Project Structure**  
```
📁 DivideFlow
│── 📄 index.html       # Login Page
│── 📄 signup.html      # Signup Page
│── 📄 dashboard.html   # Task Management Page
│── 📄 firebase.js      # Firebase Configuration
│── 📄 auth.js          # User Authentication Logic
│── 📄 tasks.js         # Task CRUD Operations
│── 📄 README.md        # Project Documentation
```

---

## **📸 Screenshots**  
✅ **Signup & Login Page**  
✅ **Task List (Add, Complete, Delete)**  
✅ **Firestore Data Management**  

---

## **📌 Contributions & Issues**  
- Feel free to **fork** this project and contribute!  
- Found a bug? Open an **issue** on GitHub.  

---

## **📜 License**  
This project is **open-source** under the **MIT License**.  

---

This **README.md** is perfect for GitHub! You can copy-paste it directly into your repository. Let me know if you want modifications. 🚀🔥
