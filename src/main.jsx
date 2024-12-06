import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context.jsx";
import "../src/Styles/index.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Context>
        <App />
    </Context>
</BrowserRouter>
);


