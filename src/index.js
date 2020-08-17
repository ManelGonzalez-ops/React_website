import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { ContextProv } from "./components/Context";
import "./i18Next.js";

ReactDOM.render(
  <ContextProv>
    
      <App />
    
  </ContextProv>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
