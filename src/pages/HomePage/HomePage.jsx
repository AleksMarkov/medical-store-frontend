//HomePage.jsx
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";
import Suppliers from "../Suppliers/Suppliers";
import Customers from "../Customers/Customers";
import { MainContainer, BodyContainer } from "./HomePage.styled";

const HomePage = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "All orders":
        return <Orders />;
      case "All products":
        return <Products />;
      case "All suppliers":
        return <Suppliers />;
      case "All customers":
        return <Customers />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainContainer>
      <Header activePage={activePage} />
      <BodyContainer>
        <Sidebar setActivePage={setActivePage} />
        {renderContent()}
      </BodyContainer>
    </MainContainer>
  );
};

export default HomePage;
