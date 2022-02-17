import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import {Provider} from "react-redux";
import configureStore from "./components/redux/reducers/configureStore"
import 'alertifyjs/build/css/alertify.min.css'
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
    <App>
      
    </App>
  </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
