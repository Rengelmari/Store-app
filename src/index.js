import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBu-qTSJ5208f2K6yPKhRiS3enUIu4nIw",
  authDomain: "store-app-4c0c5.firebaseapp.com",
  projectId: "store-app-4c0c5",
  storageBucket: "store-app-4c0c5.appspot.com",
  messagingSenderId: "659896572274",
  appId: "1:659896572274:web:dee5322c0a673e9d86e5eb",
  measurementId: "G-F9ZCRJ169R"
};

// Initialize Firebase
initializeApp(firebaseConfig); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
