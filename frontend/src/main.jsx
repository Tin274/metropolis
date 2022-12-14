import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ScrollToTop from "./components/assets/scrollToTop/scrollToTop.jsx";
import { checkUserLoggedStatus } from "./controller/localStoarageController.jsx";

import "./index.css";

const userIsLogged = checkUserLoggedStatus();

export const LoggedStatusContext = createContext({ userIsLogged });

console.log("Main.jsx userIsLogged", userIsLogged);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <LoggedStatusContext.Provider value={userIsLogged}>
                <ScrollToTop />
                <App />
            </LoggedStatusContext.Provider>
        </BrowserRouter>
    </React.StrictMode>
);
