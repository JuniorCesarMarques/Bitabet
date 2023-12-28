import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Double from "./componets/Double/Double.jsx";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import CreateAccount from "./pages/Create_account/CreateAccount.jsx";
import Crash from "./componets/Crash/Crash.jsx";
import { AuthProvider } from "./contexts/AuthProvider.tsx";
import Login from "./pages/Login/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HeaderProvider>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Double />} />
          <Route path="/crash" element={<Crash />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </HeaderProvider>
  </AuthProvider>
);
