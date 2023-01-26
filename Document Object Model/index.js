// Add the following elements to the container using ONLY JavaScript and the DOM

// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following elements inside of it:
//     1. another <h1> that says “I’m in a div”
//     2. a <p> that says “ME TOO!”
//     3. Hint for this one: after creating the <div> with createElement,
//          append the <h1> and <p> to it before adding it to the container.

// The DOM method querySelector returns the first element
// within the HTML file that matches the specified selector
const container = document.querySelector("#container"); // selector ID (container) in the HTML code is retrieved
const p1 = document.createElement("p"); // creates new HTML elements
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

// a <p> with red text that says “Hey I’m red!”
p1.classList.add("red"); // adds a class name for paragraph element (p1)
p1.textContent = "Hey I'm red!"; // creates text
p1.style.color = "red"; // modifies element style
container.appendChild(p1); // appends paragraph element to the container that will be displayed on the page

// an <h3> with blue text that says “I’m a blue h3!”
h3.classList.add("blue");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

// a <div> with a black border and pink background
// color with the following elements inside of it:
div.classList.add("container");
div.style.border = "solid black";
div.style.backgroundColor = "pink";

// another <h1> that says “I’m in a div”
h1.textContent = "I'm in a div";
div.appendChild(h1);
// a <p> that says “ME TOO!”
p2.textContent = "ME TOO!";
div.appendChild(p2);

// Hint for this one: after creating the <div> with createElement,
// append the <h1> and <p> to it before adding it to the container.
container.appendChild(div);
