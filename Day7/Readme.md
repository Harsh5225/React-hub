

# 🎨 React Background Color Changer & Counter  

A simple React application that allows users to **change the background color** dynamically and includes a **counter** component. The app utilizes **React Hooks (`useState`, `useEffect`)** and optimizes rendering using **React.memo**.  

---

## 📌 Features  

✅ **Change Background Color** – Click a button to set a new background color.  
✅ **Counter Component** – Increment the counter dynamically.  
✅ **Optimized Rendering** – Uses `React.memo()` to prevent unnecessary re-renders.  
✅ **State Management with `useState`** – Handles color changes and counter updates.  
✅ **Side Effects with `useEffect`** – Updates the `document.body.style.backgroundColor`.  

---

## 🛠️ Tech Stack  

- **React** – Functional Components, Hooks (`useState`, `useEffect`), `React.memo()`.  
- **JavaScript (ES6+)** – Arrow functions, JSX.  
- **CSS** – Basic button styling.  

---

## 📂 Project Structure  

```
/react-color-counter-app
│── src/
│   ├── components/
│   │   ├── Colorful.js      # Background color changer component
│   ├── index.js             # Entry point, renders Main component
│── public/
│   ├── index.html           # Root HTML file
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/react-color-counter-app.git
cd react-color-counter-app
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

### **Colorful Component (`Colorful.js`)**  
```jsx
import React, { useState, useEffect, memo } from "react";

function Colorful() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // Updates background color when 'color' state changes

  return (
    <>
      <h1>Background Color Changer</h1>
      <div className="buttons">
        <button style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
        <button style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
        <button style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
        <button style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
        <button style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
      </div>
    </>
  );
}

export default memo(Colorful); // Prevents unnecessary re-renders
```
- **`useState("white")`** → Initializes `color` state with `white`.  
- **`useEffect(() => {...}, [color])`** → Updates background color on `color` change.  
- **`React.memo(Colorful)`** → Memoizes component to avoid re-renders.  

---

### **Main Component (`index.js`)**  
```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/components/Colorful";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>++</button>
      </div>
      <Colorful />
    </>
  );
}

root.render(<Main />);
```
- **Counter functionality** – Uses `useState` to manage count.  
- **Renders `Colorful` component** – Ensures background color change remains independent of counter updates.  

---

In  app, the `Colorful` component is wrapped with `React.memo()`:  
```js
export default React.memo(Colorful);
```
This **prevents unnecessary re-renders** of the `Colorful` component **when its props do not change**.  

### **Why Does `React.memo()` Prevent Re-Renders?**  
Normally, in React, **when a parent component re-renders, all its child components also re-render**, even if their props haven't changed.  

- **Without `React.memo`** → `Colorful` would re-render **every time** the `Main` component re-renders.  
- **With `React.memo`** → `Colorful` will only re-render if **its props change**.

---


## 🛠️ How It Works  

1️⃣ **State Management** – `useState` manages `count` and `color` states.  
2️⃣ **Event Handling** – Button clicks update states dynamically.  
3️⃣ **Side Effects (`useEffect`)** – Automatically updates background color when `color` changes.  
4️⃣ **Optimized Rendering (`React.memo`)** – Prevents unnecessary re-renders of `Colorful` component.  

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




