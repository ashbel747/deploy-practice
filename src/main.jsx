import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import MenuPage from "./pages/MenuPage";
import ReservationPage from './pages/ReservationPage';
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu/:type" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);