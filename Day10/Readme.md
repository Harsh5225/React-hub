# 🚀 React Optimization & Performance Concepts  

This project contains **three optimized React components**:  
1️⃣ **Counter with Fibonacci Calculation** (Optimized using `useCallback` & `useMemo`)  
2️⃣ **State & Reference Example** (`useState` vs `useRef`)  
3️⃣ **Stopwatch** (Optimized using `useRef` to avoid unnecessary re-renders)  

---

## 📌 Features  

✅ **Optimized Fibonacci Calculation** – Avoids unnecessary recalculations with `useMemo`.  
✅ **Efficient Event Handlers** – Uses `useCallback` to prevent function recreation.  
✅ **State vs. Reference Handling** – Demonstrates `useRef` for mutable values without re-renders.  
✅ **Stopwatch Implementation** – Uses `useRef` to efficiently manage `setInterval`.  

---

## 🛠️ Tech Stack  

- **React** – Functional Components, Hooks (`useState`, `useEffect`, `useMemo`, `useRef`, `useCallback`).  
- **JavaScript (ES6+)** – Event handling, optimization techniques.  
- **CSS** – Basic styling for UI elements.  

---

## 📂 Project Structure  

```
/react-optimization-project
│── src/
│   ├── components/
│   │   ├── Counter.js       # Fibonacci & counter component (useMemo, useCallback)
│   │   ├── StateVsRef.js    # Demonstrates useRef vs useState
│   │   ├── Stopwatch.js     # Stopwatch implementation (useRef)
│── public/
│   ├── index.html           # Root HTML file
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/react-optimization-project.git
cd react-optimization-project
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

## 📝 Code Explanation & Optimizations  

### **1️⃣ Fibonacci Calculation Optimization** (`useMemo` & `useCallback`)  

#### **Problem:**  
Fibonacci calculations are expensive because they involve **recursive function calls**. If we don’t optimize, React will **recompute** Fibonacci **on every re-render**, leading to **performance issues**.  

#### **Solution:**  
- ✅ **`useMemo`** – Caches the computed Fibonacci number and recalculates **only when input changes**.  
- ✅ **`useCallback`** – Prevents function re-creation unless dependencies change.  

#### **Optimized Code:**
```js
const fibonacci = useCallback((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}, []);

const result = useMemo(() => fibonacci(number), [number]); 
```
**🔹 How It Works?**  
- **`useMemo(() => fibonacci(number), [number])`** → Memoizes the computed value, so it doesn’t **recalculate unless `number` changes**.  
- **`useCallback(fibonacci, [])`** → Ensures that the Fibonacci function is **not recreated on re-renders**.  

---

### **2️⃣ `useRef` vs. `useState` – Managing Mutable Values**  

#### **Problem:**  
If we use `useState` for variables like **counters or timers**, React will re-render the component **every time the value changes**. This can cause unnecessary performance issues.  

#### **Solution:**  
- ✅ **Use `useRef` for values that don’t require re-renders.**  
- ✅ **Use `useState` for values that should trigger UI updates.**  

#### **Optimized Code:**
```js
const money = useRef(0);

<button
  onClick={() => {
    money.current = money.current + 1;
    console.log(money.current); // Updates value without re-rendering
  }}
>
  Increase Money
</button>
```
**🔹 Why Use `useRef`?**  
- `useRef` **does not trigger re-renders** when updated.  
- Helps **store values across renders** without affecting performance.  

---

### **3️⃣ Stopwatch Optimization – Managing `setInterval` with `useRef`**  

#### **Problem:**  
Using `setInterval` inside `useState` can lead to **memory leaks** and **unnecessary re-renders**.  

#### **Solution:**  
- ✅ **Use `useRef` to store interval ID** → Prevents unnecessary re-renders.  
- ✅ **Clears the interval properly** when stopping/resetting the stopwatch.  

#### **Optimized Code:**
```js
const intervalRef = useRef(null);

function start() {
  intervalRef.current = setInterval(() => {
    setTime((prevTime) => prevTime + 1);
  }, 1000);
}

function stop() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
}

function reset() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
  setTime(0);
}
```
**🔹 Why Use `useRef`?**  
- **Avoids unnecessary re-renders** when `setInterval` updates.  
- **Ensures the interval ID is stored properly** and can be cleared without memory leaks.  

---

## 📷 Preview  

![React Optimization](your-screenshot-url)  

---

## 🔧 Optimizations & Best Practices  

✅ **`useMemo()`** – Caches expensive Fibonacci calculations to prevent re-computation.  
✅ **`useCallback()`** – Prevents function re-creation to optimize memory usage.  
✅ **`useRef()`** – Stores values (`money`, `setInterval` ID) without causing re-renders.  
✅ **Efficient Timer Management** – Ensures `setInterval` is cleared properly.  

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