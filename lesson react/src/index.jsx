import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Increment from './Increment';
import MyShop from './MyShop';

// import '../src/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyShop />
  </React.StrictMode>
);

