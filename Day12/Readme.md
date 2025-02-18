# React Router Example

This project demonstrates **React Router** implementation with basic and nested routing in a React application. It includes multiple pages, navigation links, and nested routing using `<Outlet />`.

## 📌 Features
- **Client-side Routing** using `react-router-dom`
- **Navigation** between multiple pages using `<Link>`
- **Nested Routing** for `Details` page
- **Dynamic Content Rendering** with `<Outlet />`

---

## 🚀 Getting Started
### 1️⃣ Install Dependencies
Ensure you have **Node.js** installed, then run:
```bash
npm install
```

### 2️⃣ Run the Application
```bash
npm start
```
This will start the development server at `http://localhost:3000/`.

---

## 📁 Folder Structure
```
/root
│── src/
│   ├── Home.js
│   ├── Contact.js
│   ├── Dashboard.js
│   ├── Details.js
│   ├── Zero.js
│   ├── Hi.js
│   ├── Hello.js
│── App.js
│── index.js
│── package.json
│── README.md
```

---

## 🔗 Navigation Setup (App.js)
```jsx
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        
        {/* Nested Routing */}
        <Route path="/Details" element={<Details />}>
          <Route index element={<Zero />} />
          <Route path="Hello" element={<Hello />} />
          <Route path="Hi" element={<Hi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📍 Nested Routing (`Details.js`)
```jsx
import { Outlet, Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <nav>
        <Link to="Hello">Hello</Link>
        <Link to="Hi">Hi</Link>
      </nav>
      <h1>Welcome to Details Page</h1>
      <Outlet />  {/* Displays child routes dynamically */}
    </div>
  );
};

export default Details;
```
**Explanation:**
- `<Outlet />` is used to render the nested child route inside `Details.js`.
- Clicking on `Hello` or `Hi` will update the content dynamically.

---

## 📌 Concepts Used
1. **React Router** – Enables navigation without page reloads.
2. **Nested Routing** – Organizes related components hierarchically.
3. **useOutlet()** – Renders nested components dynamically.
4. **useState Hook** – Manages local component states.
5. **Link Component** – Provides client-side navigation.

---

## 🌟 Summary
This project helps in understanding **React Router** and **nested routing** by implementing an interactive multi-page structure. The use of `<Outlet />` makes the nested routes dynamic and scalable.

**Happy Coding! 🚀**

