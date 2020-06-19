import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {RootStore} from './stores/RootStore';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import { bootStore } from "./Bootstrapper";
import App from "./components/App";

import 'semantic-ui-css/semantic.min.css';

const store = RootStore.create({});
bootStore(store);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
