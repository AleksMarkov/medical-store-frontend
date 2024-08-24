//HomePage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";
import Suppliers from "../Suppliers/Suppliers";
import Customers from "../Customers/Customers";
import { MainContainer, BodyContainer } from "./HomePage.styled";

const HomePage = () => {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <Sidebar />
        <Dashboard />
      </BodyContainer>
    </MainContainer>
  );
};

export default HomePage;
