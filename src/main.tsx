import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SecondApp from './secondApp.tsx'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SecondApp />
  </React.StrictMode>,
)
