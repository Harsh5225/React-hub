# ReactJS Learning - Day 2 & Day 3

## Introduction
This project covers the basics of React.js, including creating elements using `React.createElement`, JSX, functional components, and styling in React.

---

## Day 2: React Basics
### 1. Creating Elements with `React.createElement`
```jsx
const element = React.createElement(
  "h1",
  { id: "first", className: "Xyz", style: { backgroundColor: "yellow", fontSize: "30px" } },
  "Hello everyone"
);

const element2 = React.createElement(
  "h1",
  { id: "second", className: "Xyz", style: { backgroundColor: "yellow", fontSize: "30px" } },
  "Hello if everyone"
);

const div = React.createElement(
  "div",
  { id: "3", style: { backgroundColor: "green" } },
  [element, element2]
);
```

### 2. Rendering Elements
```jsx
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(div);
```

---

## Day 3: JSX and Components
### 1. Using JSX (JavaScript XML)
```jsx
const newElement = (
  <div>
    <h1>Hello</h1>
    <h1>Hello Coder</h1>
    <h1>Hello Coder Army</h1>
  </div>
);
```

### 2. Styling in React
```jsx
const name = "harsh";
const obj = {
  backgroundColor: "black",
  color: "white",
  fontSize: "30px",
};

const bundleElement = (
  <>
    <h1 id="first" className="first1.0" money={23} style={obj}>
      {name}
    </h1>
    <h1>Hello Coder</h1>
    <h1>Hello Coder Army</h1>
  </>
);
```

### 3. Function-based Component
```jsx
function greetFunction() {
  return <h1>Hello function component</h1>;
}
const newElement2 = greetFunction();
```

### 4. Arrow Function Component
```jsx
const meet = () => {
  return <h1>Hello everyone</h1>;
};
const element3 = meet();
```

### 5. Rendering Components
```jsx
Reactroot.render(
  <>
    {meet()}
    {newElement2}
  </>
);
```

---

## Notes
- **Always start component names with a capital letter.**
- React treats components starting with lowercase letters as DOM tags.
- Example: `<div />` represents an HTML tag, but `<Welcome />` is a component and must be in scope.

---

## How to Run the Code
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-learning.git
   ```
2. Navigate to the project folder:
   ```sh
   cd react-learning
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

Happy Coding! 🚀

