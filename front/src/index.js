import React from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from './App';
import Store from "./store/store";
import {Provider} from "react-redux";

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App/>
    </Provider>
);