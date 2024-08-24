// App.jsx
import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Login = lazy(() => import("./pages/Login/Login"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute element={HomePage} />}
        />
        {/* other routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
