import React from "react";
import ReactDOM from "react-dom";
import App from './App'; //imports renders from the ./App.js file
import './index.css'
//This basiscally renders the <div id="root"> on the index.html found under the public folder
ReactDOM.render(<App />,document.getElementById('root'));