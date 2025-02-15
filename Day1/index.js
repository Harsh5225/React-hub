const root = document.getElementById("root");
const reactElement = {
  createElementS: function (tag, style, children) {
    // console.log(tag,children)
     const tagElement = document.createElement(`${tag}`);
     if(typeof children==="object"){
      children.forEach(element=>{
        console.log(element)
        tagElement.append(element)
      })
     }else{
      tagElement.innerText = children;
     }
    for (let key in style) {
      tagElement.style[key] = style[key];
    }
    return tagElement;
  },
};

const RenderDom = {
  render: function (root, element) {
    root.append(element);
  },
};

const header1 = reactElement.createElementS(
  "h1",
  { fontSize: "40px", backgroundColor: "yellow" },
  "Hello world"
);
const header2 = reactElement.createElementS(
  "h1",
  { fontSize: "40px", backgroundColor: "green" },
  "GOod world"
);

RenderDom.render(root, header1);
RenderDom.render(root, header2);

// unordered list
// html
// css
// js
const li1 = reactElement.createElementS("li", {}, "HTML");
const li2 = reactElement.createElementS("li", {}, "CSS");
const li3 = reactElement.createElementS("li", {}, "JS");
const ul = reactElement.createElementS(
  "ul",
  { fontSize: "40px", backgroundColor: "pink" },
  [li1,li2,li3]
);

RenderDom.render(root,ul);
