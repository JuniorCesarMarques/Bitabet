import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx"
import Double from './componets/Double/Double.jsx';
import Login from './componets/Double/Login/Login.jsx';
import { HeaderProvider } from './contexts/HeaderContext.jsx';
import CreateAccount from './componets/Double/Create_account/CreateAccount.jsx';
import Crash from './componets/Crash/Crash.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <HeaderProvider>
      <BrowserRouter>
         <App />
        <Routes>
          <Route path='/' element={<Double />}/>
          <Route path='/crash' element={<Crash />}/>
          <Route path='/create-account' element={<CreateAccount />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </HeaderProvider>
)
