//App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"; // Убедись, что путь правильный

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Добавь другие маршруты по мере их создания */}
      </Routes>
    </Router>
  );
}

export default App;
