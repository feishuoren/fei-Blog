import '!style-loader!css-loader!./style.css';
import React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App';

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<App />);
