# Asynchronous JavaScript with Promises

This is a simple example of how to use Promises in JavaScript to handle asynchronous operations, in this case, a server request. The code demonstrates how to create a Promise, resolve it when the response is successful, and reject it when the response is unsuccessful.

## Code Overview

In this code, a Promise called `makeServerRequest` that represents a server request operation. It simulates a response from the server, which can either be successful or unsuccessful.

- If `responseFromServer` is `true`, the Promise is resolved with the message "We got the data."
- If `responseFromServer` is `false`, the Promise is rejected with the message "Data not received."

The code then uses `.then` to handle a resolved Promise, printing the result to the console, and `.catch` to handle a rejected Promise, printing the error message.

## How to Run

To run this code, you need a JavaScript environment, such as a web browser or a Node.js runtime. Here's how you can execute it:

1. Save the code to a JavaScript file, e.g., `serverRequest.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory where the `serverRequest.js` file is located.
4. Run the code using Node.js (if you have it installed) with the following command:

   ```shell
   node serverRequest.js
   ```
