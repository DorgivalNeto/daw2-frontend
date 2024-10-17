import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import Routes from './routes';
import StoreProvider from './security/Authprovider/provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <StoreProvider>
      <Routes/>
      </StoreProvider>
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
