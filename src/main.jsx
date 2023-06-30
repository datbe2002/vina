import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer></ToastContainer>
      <App />
    </Provider>
  </React.StrictMode>,
)
