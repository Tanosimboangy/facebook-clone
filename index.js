import React from 'react';
import ReactDOM from "react-dom";
import App from "./component/App";
import { ContextProvider } from './component/context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
, document.getElementById("root"));