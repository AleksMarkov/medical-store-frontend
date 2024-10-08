// App.jsx
import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SharedLayout = lazy(() => import("./pages/SharedLayout/SharedLayout"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Orders = lazy(() => import("./components/Orders/Orders"));
const Products = lazy(() => import("./components/Products/Products"));
const Suppliers = lazy(() => import("./components/Suppliers/Suppliers"));
const Customers = lazy(() => import("./components/Customers/Customers"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<PublicRoute element={LoginPage} />} />
        <Route path="/" element={<PrivateRoute element={SharedLayout} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
