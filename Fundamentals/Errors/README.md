# Errors

## Types of Errors

### ReferenceError

A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope.

### Syntax Error

A syntax error occurs when the code is not written correctly, i.e., in accordance with the grammatical rules of JS.

Example:

    function helloWorld() {
        console.log "Hello World!"
    }

will throw an Uncaught SyntaxError because the parentheses are missing for `console.log()`

### Type Error

According to MDN, a `TypeError` can be thrown when:

- an operand or argument passed to a function is incompatible with the type expected by that operator or function
- or when attempting to modify a value that cannot be changed
- or when attempting to use a value in an inappropriate way

## Tips for Resolving Errors

- Read and understand the error
- Google the error
- Use the debugger using Chrome DevTools: [Learn to debug JavaScript in this tutorial.](https://developer.chrome.com/docs/devtools/javascript/)
- Make use of the console when wanting immediate feedback. There are also other useful methods including `console.table()`, `console.trace()`, and more.

## Errors VS Warnings

- Warnings will not stop the execution of a program or any process a developer is attempting to run
  - They are messages that will provide insight on potential problems
- Errors, on the other hand, will stop the execution of a program
