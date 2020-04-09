import React from 'react';
import ReactDOM from 'react-dom';
// Save a reference to the root element for reuse
const rootEl = document.getElementById("root");

// Create a reusable render method that we can call more than once
let render = () => {
    // Dynamically import our main App component, and render it
    const MainApp = require("./App").default;
    ReactDOM.render(<MainApp />, rootEl);
};

render();
