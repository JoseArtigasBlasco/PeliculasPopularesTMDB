import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import MiRouter from './router/MiRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <MiRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
