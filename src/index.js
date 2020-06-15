import React from "react";
<<<<<<< HEAD
import { render } from "react-dom";
import App from "./components/App";
import { RootStore } from "./stores/RootStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let head = document.getElementsByTagName("head")[0];
let style = document.createElement("link");

style.href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css";
style.type = "text/css";
style.rel = "stylesheet";
head.appendChild(style);

let root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const store = RootStore.create({});

// Now we can render our application into it
render(
=======
import ReactDOM from "react-dom";
import { RootStore } from "./stores/RootStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import makeInspectable from "mobx-devtools-mst";

import App from "./App";
import "semantic-ui-css/semantic.min.css";

const store = RootStore.create({});
makeInspectable(store);

ReactDOM.render(
>>>>>>> bfdff12d01a345353d529b012950ba32fa063d7d
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
