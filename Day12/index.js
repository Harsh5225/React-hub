import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hi from "./src/Hi";
import Hello from "./src/Hello";

// ROUTING
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Dashboard"}>Dashboard</Link>
        <Link to={"/Details"}>Details</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>

        {/* Nested Routing */}
        <Route path="/Details" element={Details()}>
          {/* Default page */}
          <Route index element={<Zero />}></Route>
          {/* /Details/Hello */}
          <Route path="Hello" element={<Hello></Hello>}></Route>
          <Route path="Hi" element={<Hi></Hi>}></Route>
        </Route>
      </Routes>

      {/* Footer Section */}
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
