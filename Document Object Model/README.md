# DOM - Document Object Model

The DOM is a tree-like representation of the contents of a webpage - a tree of "nodes" with different relationships depending on how they're arranged in the HTML document.

    <div id="container">
        <div class="display"></div>
        <div class="controls"></div>
    </div>

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
