import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, compose, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import {rootReducer} from "./components/redux/rootReducer";
import thunk from "redux-thunk";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        //window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </Provider>,
  rootElement)

registerServiceWorker();

