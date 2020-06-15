import React from "react";
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
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
