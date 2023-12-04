import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx"
import Double from './routes/Double.jsx';
import { HeaderProvider } from './contexts/HeaderContext.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderProvider>
      <BrowserRouter>
         <App />
        <Routes>
          <Route path='/' element={<Double />}/>
        </Routes>
      </BrowserRouter>
    </HeaderProvider>
  </React.StrictMode>,
)
