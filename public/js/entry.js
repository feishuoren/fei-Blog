import '!style-loader!css-loader!../styles/style.css';
import React from 'react';
import * as ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
