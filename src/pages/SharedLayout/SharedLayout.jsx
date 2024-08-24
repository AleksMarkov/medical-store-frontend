//SharedLayout.jsx
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainContainer, BodyContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Обновляем состояние activePage в зависимости от текущего пути
    switch (location.pathname) {
      case "/dashboard":
        setActivePage("Dashboard");
        break;
      case "/orders":
        setActivePage("Orders");
        break;
      case "/products":
        setActivePage("Products");
        break;
      case "/suppliers":
        setActivePage("Suppliers");
        break;
      case "/customers":
        setActivePage("Customers");
        break;
      default:
        setActivePage("");
        break;
    }
  }, [location.pathname]);

  return (
    <MainContainer>
      <Header activePage={activePage} />
      <BodyContainer>
        <Sidebar setActivePage={setActivePage} />
        <Outlet />
      </BodyContainer>
    </MainContainer>
  );
};

export default SharedLayout;
