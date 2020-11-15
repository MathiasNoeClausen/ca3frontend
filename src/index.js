import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './final.css'
import { BrowserRouter as Router } from "react-router-dom";
import bookFacade from "./bookFacade";
import facade from "./apiFacade";

const AppWithRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};


ReactDOM.render(
  
    <AppWithRouter  />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
