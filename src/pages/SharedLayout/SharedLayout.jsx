//SharedLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainContainer, BodyContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <Sidebar />
        <Outlet /> {/* Это место, где будет отображаться контент страницы */}
      </BodyContainer>
    </MainContainer>
  );
};

export default SharedLayout;
