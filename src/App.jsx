// App.jsx
import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Login = lazy(() => import("./pages/Login/Login"));
const SharedLayout = lazy(() => import("./pages/SharedLayout/SharedLayout")); // Новый SharedLayout компонент
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const Products = lazy(() => import("./pages/Products/Products"));
const Suppliers = lazy(() => import("./pages/Suppliers/Suppliers"));
const Customers = lazy(() => import("./pages/Customers/Customers"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/" element={<PrivateRoute element={SharedLayout} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="customers" element={<Customers />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
