# DOM - Document Object Model

The DOM is a tree-like representation of the contents of a webpage - a tree of "nodes" with different relationships depending on how they're arranged in the HTML document.

    <div id="container">
        <div class="display"></div>
        <div class="controls"></div>
    </div>

## DOM Methods

**Query Selectors**

- `element.querySelector(selector)` returns a reference to the first match of selector

- `element.querySelectorAll(selectors)` returns a "nodelist" containing references to all of the matches of the selectors

**Element Creation**

- `document.createElement(tagName, [options])` creates a new element of tag type tagName. `[options]` means you can add some optional parameters to the function.

  const div = document.createElement('div');

creates a new element in memory. Allows manipulation of element before placing it on a page.

**Append Elements**

- `parentNode.appendChild(childNode)` appends childNode as the last child of parentNode
- `parentNode.insertBefore(newNode, referenceNode)` inserts newNode into parentNode before refenceNode

**Remove Elements**

- `parentNode.removeChild(child)` removes child from parentNode on the DOM and returns a refence to child

## DOM Events

Events are actions that occur on a webpage such as mouse-clicks or keypresses.
JavaScript allows the webpage to react and listen to these events

Three methods to work with events:

1. attach functions’ attributes directly on your HTML elements

        <button onclick="alert('Hello World')">Click Me</button>

2. set the “on_event_” property on the DOM object in your JavaScript

        <!-- the HTML file -->
        <button id="btn">Click Me</button>
        
        // the JavaScript file
        const btn = document.querySelector('#btn');
        btn.onclick = () => alert("Hello World");

3. attach event listeners to the nodes in your JavaScript

        <!-- the HTML file -->
        <button id="btn">Click Me Too</button>
        
        // the JavaScript file
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', () => {
        alert("Hello World");
        });