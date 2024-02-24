import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{border: "1px solid purple", margin: "0px"}}>
      <App />
    </div>
  </React.StrictMode>,
)
