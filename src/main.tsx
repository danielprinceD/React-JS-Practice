import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SecondApp from './secondApp.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routing />
    </BrowserRouter>
  </React.StrictMode>,
)
