# 🔐 React Password Generator  

A **random password generator** built with **React**. It allows users to customize the password length and choose whether to include **numbers** and **special characters**.  

---

## 🚀 Features  

✅ **Generate Secure Passwords** – Randomly generates a password each time settings change.  
✅ **Adjustable Length** – Use a slider to set password length (5 to 50 characters).  
✅ **Include Numbers & Special Characters** – Toggle checkboxes to customize password content.  
✅ **Optimized with `useCallback()` & `useEffect()`** – Efficient re-renders and memory optimization.  

---

## 🛠️ Tech Stack  

- **React** – Functional Components, Hooks (`useState`, `useEffect`, `useCallback`).  
- **JavaScript (ES6+)** – Event handling, string manipulation.  
- **CSS** – Basic styling for UI.  

---

## 📂 Project Structure  

```
/react-password-generator
│── src/
│   ├── index.js              # Entry point, renders PasswordGenerator component
│   ├── components/
│   │   ├── PasswordGenerator.js  # Main password generator logic
│── public/
│   ├── index.html            # Root HTML file
│── package.json              # Dependencies & scripts
│── README.md                 # Project documentation
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/react-password-generator.git
cd react-password-generator
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Run the App**  
```bash
npm start
```
The app will now be running at **`http://localhost:3000/`** in your browser.  

---

## 📝 Code Explanation  

### **1️⃣ `useState` – State Management**  
```js
const [password, setpassword] = useState("xxxxppppxxcxx");
const [length, setlength] = useState(10);
const [numberchanged, setnumberchanged] = useState(false);
const [charchanged, setcharchanged] = useState(false);
```
- **Stores the password** → `password`.  
- **Tracks password length** → `length`.  
- **Controls if numbers should be included** → `numberchanged`.  
- **Controls if special characters should be included** → `charchanged`.  

---

### **2️⃣ `useCallback` – Prevents Unnecessary Re-Creation of Function**  
```js
let generatepassword = useCallback(() => {
  let str = "agstevcwtqoemcbhohpjcxvzcutsvyghdjkomdpowbbsid";
  if (numberchanged) {
    str += "172639632738";
  }
  if (charchanged) {
    str += "!@#$%^&*()_+=~`?<>:";
  }

  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += str[Math.floor(Math.random() * str.length)];
  }
  setpassword(pass);
}, [length, numberchanged, charchanged]);
```
🔹 **Why `useCallback`?**  
- Normally, in React, every time the component **re-renders**, the `generatepassword` function **would be created again**.  
- `useCallback()` **memoizes the function**, so it only changes **if its dependencies (`length, numberchanged, charchanged`) change**.  
- This makes the app **more efficient** because it avoids unnecessary function re-creation.  

---

### **3️⃣ `useEffect` – Runs Code When Dependencies Change**  
```js
useEffect(generatepassword, [generatepassword]);
```
🔹 **Why `useEffect`?**  
- Whenever **`length, numberchanged, or charchanged` changes**, `generatepassword` is automatically called.  
- This means the password **updates immediately** when the user adjusts the settings.  

---


## 🔧 Optimizations & Best Practices  

✅ **`useCallback()`** – Prevents unnecessary function recreation, improving performance.  
✅ **`useEffect()`** – Automatically regenerates passwords when settings change.  
✅ **Single `setpassword` Update** – Reduces unnecessary re-renders.  

---

## 🤝 Contributing  

Want to improve this project? Feel free to:  
- ⭐ Star this repository  
- 🛠️ Open an issue  
- 🔀 Submit a pull request  

---

## 📜 License  

This project is **open-source** and available under the **MIT License**.  

---

Let me know if you need any modifications! 🚀