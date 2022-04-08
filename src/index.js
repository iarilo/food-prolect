/*  import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);  */

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementByid('root');

const root = ReactDOM.createRoot(container);
root.render(
 <React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </React.StrictMode>
); */


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <StrictMode>   {/* jshint ignore:line   */}
    < BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
); 

