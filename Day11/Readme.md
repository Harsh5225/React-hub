# 🌍 React Global Context API Example  

This project demonstrates how to use **React Context API** to manage global state efficiently. It includes:  

- ✅ **Global State Management** using `createContext()`  
- ✅ **Data Sharing Across Components** via `useContext()`  
- ✅ **Multiple Components Using Shared State** (`ComponentA`, `ComponentB`, `ComponentC`)  

---

## 📌 Features  

🔹 **Global Context (`GlobalContext`)** – Provides shared data across components.  
🔹 **`useContext()` Hook** – Accesses global values without prop drilling.  
🔹 **Dynamic State Management** – Example includes a counter with increment & decrement functionality.  

---

## 🛠️ Tech Stack  

- **React** – Functional Components, Hooks (`useState`, `useContext`).  
- **JavaScript (ES6+)** – Modern ES6+ syntax.  

---

## 📂 Project Structure  

```
/react-context-api-demo
│── src/
│   ├── GlobalContext.js      # Global context file
│   ├── App.js                # Root component with Context Provider
│   ├── ComponentA.js         # Consumes global data
│   ├── ComponentB.js         # Consumes global data
│   ├── ComponentC.js         # Consumes global data
│   ├── Decrement.js          # Uses context to modify global state
│── public/
│   ├── index.html            # Root HTML file
│── package.json              # Dependencies & scripts
│── README.md                 # Project documentation
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/react-context-api-demo.git
cd react-context-api-demo
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

### **1️⃣ Creating a Global Context** (`GlobalContext.js`)  
```js
import { createContext } from "react";

const GlobalContext = createContext("GlobalContext");

export default GlobalContext;
```
🔹 **What is happening?**  
- `createContext()` creates a **global state** that can be accessed across components.  

---

### **2️⃣ Providing Global Data** (`App.js`)  
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";
import ComponentA from "./src/ComponentA";
import ComponentB from "./src/ComponentB";
import ComponentC from "./src/ComponentC";

export const Data = createContext();

const App = () => {
  const name = "Harsh";

  return (
    <Data.Provider value={name}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </Data.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```
🔹 **Key Concepts**  
- `Data.Provider` wraps components so they can access `name`.  
- **Now, `ComponentA`, `ComponentB`, and `ComponentC` can access `name` without passing props manually!**  

---

### **3️⃣ Consuming Context with `useContext()`** (`Decrement.js`)  
```js
import React from "react";
import { useContext } from "react";
import GlobalContext from "./AGlobal";

const Decrement = (props) => {
  const data = useContext(GlobalContext); // Accessing global context

  const { countProps: count, setCount: setcount } = props;

  return (
    <>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </>
  );
};

export default Decrement;
```
🔹 **What’s happening?**  
- `useContext(GlobalContext)` allows this component to access the global state.  
- This prevents **"prop drilling"** (passing props through multiple components).  

---



## 🔧 Optimizations & Best Practices  

✅ **Avoid Prop Drilling** – Context API prevents passing props deep into components.  
✅ **Use `useContext()` Efficiently** – Avoid unnecessary re-renders by accessing only required values.  
✅ **Modular File Structure** – Keeps context separate from components for better scalability.  

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

Let me know if you need modifications! 🚀