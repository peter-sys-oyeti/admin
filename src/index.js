import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import { RootStore } from "./stores/RootStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import "semantic-ui-css/semantic.min.css";

const store = RootStore.create({});
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement("div");

root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
