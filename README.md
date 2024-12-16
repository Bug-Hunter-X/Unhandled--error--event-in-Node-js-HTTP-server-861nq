# Unhandled 'error' event in Node.js HTTP server

This repository demonstrates an uncommon bug in Node.js where the server crashes silently without providing details if an error occurs during request handling.  The issue lies in not handling the 'error' event emitted by the HTTP server. This is particularly problematic as it makes debugging extremely difficult.

## Bug
The `bug.js` file contains a simple Node.js HTTP server.  However, it lacks error handling, which causes unexpected crashes if any error happens. 

## Solution
The `bugSolution.js` file demonstrates how to fix this. By attaching a listener to the 'error' event of the server, we ensure that any errors are properly logged. This makes identification and resolution much easier.