// SharedLayout.jsx
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainContainer, BodyContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1440 || window.innerWidth <= 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    // Check initial width
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setActivePage("Dashboard");
        break;
      case "/orders":
        setActivePage("All orders");
        break;
      case "/products":
        setActivePage("All products");
        break;
      case "/suppliers":
        setActivePage("All suppliers");
        break;
      case "/customers":
        setActivePage("All customers");
        break;
      default:
        setActivePage("");
        break;
    }
  }, [location.pathname]);

  return (
    <MainContainer>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <BodyContainer>
        {showSidebar && <Sidebar setActivePage={setActivePage} />}
        <Outlet />
      </BodyContainer>
    </MainContainer>
  );
};

export default SharedLayout;
