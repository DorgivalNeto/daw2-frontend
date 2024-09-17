import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import Routes from './routes';
import { Authprovider } from './security/Authprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Authprovider>
      <Routes/>
      </Authprovider>
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
