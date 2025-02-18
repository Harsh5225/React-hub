# React Hooks and Concepts Used in the Project

## Overview
This project demonstrates the use of React hooks such as `useState`, `useRef`, `useCallback`, and `useMemo` to create interactive applications like a Stopwatch, Counter, and Fibonacci Calculator.

---

## 1. Stopwatch Component
### **Concepts Used:**
- `useState` for managing the time value and button states.
- `useRef` for storing the interval reference to avoid unnecessary re-renders.

### **Key Code:**
```jsx
const [time, setTime] = useState(0);
const [disable, setDisable] = useState(false);
const intervalRef = useRef(null);
```

### **Why useRef?**
- `useRef` holds the interval reference, preventing unnecessary re-renders when the stopwatch updates.
- Helps in stopping and resetting the timer efficiently.

### **Functions Explained:**
```jsx
function start() {
  intervalRef.current = setInterval(() => {
    setTime(prevTime => prevTime + 1);
  }, 1000);
  setDisable(true);
}

function stop() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
  setDisable(false);
}

function reset() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
  setTime(0);
  setDisable(false);
}
```

- **`start()`**: Starts the timer and updates time every second.
- **`stop()`**: Stops the timer by clearing the interval.
- **`reset()`**: Stops the timer and resets the time.

---

## 2. Counter with `useRef`
### **Concepts Used:**
- `useState` for normal state updates.
- `useRef` to persist values without re-rendering the component.

### **Key Code:**
```jsx
const money = useRef(0);
```

### **Why useRef?**
- Unlike `useState`, updating a `useRef` variable doesn’t cause a re-render.
- Used here to maintain a persistent value for money without triggering updates.

### **Increment Function for `useRef` Variable:**
```jsx
<button onClick={() => {
  money.current += 1;
  console.log(money.current);
}}>
  Increase Money
</button>
```
- The value of `money.current` updates but does not cause a re-render of the component.

---

## 3. Fibonacci Calculator with `useCallback` and `useMemo`
### **Concepts Used:**
- `useCallback` for memoizing functions.
- `useMemo` for caching expensive calculations.

### **Key Code:**
```jsx
const fibonacci = useCallback((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}, []);

const result = useMemo(() => fibonacci(number), [number]);
```

### **Why `useCallback`?**
- Prevents function recreation on every re-render.
- Useful for optimizing recursive functions like Fibonacci calculation.

### **Why `useMemo`?**
- Caches expensive calculations.
- Only recalculates when `number` changes, improving performance.

### **Benefits:**
- Avoids unnecessary recomputation of Fibonacci numbers.
- Enhances performance by reducing function calls.

---

## **Summary of Hooks Used**
| Hook       | Purpose |
|------------|-----------------------------------------------------------|
| `useState` | Manages stateful variables and triggers component updates. |
| `useRef`   | Stores persistent values without causing re-renders. |
| `useCallback` | Prevents function recreation between re-renders. |
| `useMemo` | Caches computed values to optimize performance. |

### **Quick Revision Tips:**
- Use `useRef` for values that persist across renders without causing re-renders.
- Use `useMemo` to optimize expensive calculations.
- Use `useCallback` to memoize functions and prevent unnecessary re-creations.


