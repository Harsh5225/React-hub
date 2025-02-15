import React from "react";
import ReactDOM from "react-dom/client";

// DAY_2
// const element=React.createElement("h1",{id:"first",className:"Xyz",style:{backgroundColor:"yellow",fontSize:"30px"}},"Hello everyone")
// const element2=React.createElement("h1",{id:"second",className:"Xyz",style:{backgroundColor:"yellow",fontSize:"30px"}},"Hello if everyone")
// const div=React.createElement('div',{id:"3",style:{backgroundColor:"green"}},[element,element2])
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(element);
// Reactroot.render(element2); // it will remove the previous content || overload on it.
// Reactroot.render(div)

// DAY_2
// JSX: javascript XML: HTML code direct js ke andar likh sakte hai
const newElement = (
  <div>
    <h1>Hello</h1>
    <h1>Hello Coder</h1>
    <h1>Hello Coder Army</h1>
  </div>
);

// without div,use wrap

const name = "harsh";

const obj = {
  backgroundColor: "black",
  color: "white",
  fontSize: "30px",
};

// ReactComponent
const bundleElement = (
  <>
    <h1 id="first" className="first1.0" money={23} style={obj}>
      {name}
    </h1>
    <h1>Hello Coder</h1>
    <h1>Hello Coder Army</h1>
  </>
);

// function based component
function greetFunction() {
  return <h1>Hello function component</h1>;
}
const newElement2 = greetFunction();

// arrow function
const meet = () => {
  return <h1>Hello everyone</h1>;
};

const element3 = meet();
// Reactroot.render(element3)
// Reactroot.render(newElement)

Reactroot.render(
  <>
    {meet()}
    {newElement2}
  </>
);


//*Note: Always start component names with a capital letter.

//*React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

