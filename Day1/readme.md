# React-Like Element Creation (Day 1)

## 📌 Overview
This project demonstrates a simple **React-like** element creation system using **JavaScript DOM manipulation**. It defines custom methods to create and render elements dynamically.

## 🚀 Features
- **Custom `createElementS` function** to create DOM elements with styles and children.
- **`RenderDom.render` function** to append elements to the DOM.
- **Supports nested elements**, as seen in the unordered list example.

## 📜 Code Breakdown
### **1️⃣ Creating Elements**
```javascript
const reactElement = {
  createElementS: function (tag, style, children) {
    const tagElement = document.createElement(`${tag}`);
    if (typeof children === "object") {
      children.forEach(element => {
        tagElement.append(element);
      });
    } else {
      tagElement.innerText = children;
    }
    for (let key in style) {
      tagElement.style[key] = style[key];
    }
    return tagElement;
  },
};
```

### **2️⃣ Rendering Elements**
```javascript
const RenderDom = {
  render: function (root, element) {
    root.append(element);
  },
};
```

### **3️⃣ Example Usage**
```javascript
const root = document.getElementById("root");

const header1 = reactElement.createElementS(
  "h1",
  { fontSize: "40px", backgroundColor: "yellow" },
  "Hello world"
);
const header2 = reactElement.createElementS(
  "h1",
  { fontSize: "40px", backgroundColor: "green" },
  "Good world"
);

RenderDom.render(root, header1);
RenderDom.render(root, header2);
```

### **4️⃣ Creating an Unordered List**
```javascript
const li1 = reactElement.createElementS("li", {}, "HTML");
const li2 = reactElement.createElementS("li", {}, "CSS");
const li3 = reactElement.createElementS("li", {}, "JS");
const ul = reactElement.createElementS(
  "ul",
  { fontSize: "40px", backgroundColor: "pink" },
  [li1, li2, li3]
);

RenderDom.render(root, ul);
```




