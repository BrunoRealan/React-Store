import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALgMc0BQK3ZO5dwtsACCgO9OI3KNefFrM",
  authDomain: "react-rayban-store.firebaseapp.com",
  projectId: "react-rayban-store",
  storageBucket: "react-rayban-store.appspot.com",
  messagingSenderId: "1001145137344",
  appId: "1:1001145137344:web:23363c3b7d420116375525"
};

const app = initializeApp(firebaseConfig);

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
