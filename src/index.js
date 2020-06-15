import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { RootStore } from "./stores/RootStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { bootStore } from "./Bootstrapper";
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
bootStore(store);
render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
