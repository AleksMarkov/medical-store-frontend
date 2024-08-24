//Header.jsx
import React from "react";
import {
  HeaderContainer,
  LogoWrapper,
  LogoImage,
  HeaderTitle,
  LogoutButton,
  LogoutIcon,
  SubHeader,
  Divider,
  HeaderBlock,
} from "./Header.styled";
import logo from "../../assets/svg/logo.svg";
import logoutIcon from "../../assets/svg/logout.svg";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Header = ({ activePage }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");

      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (error) {
      console.error("Ошибка выхода:", error);
    }
  };

  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoImage src={logo} alt="Logo" />
      </LogoWrapper>
      <HeaderBlock>
        <SubHeader>
          <HeaderTitle>Medicine Store</HeaderTitle>
          <Divider>{activePage} | vendor@gmail.com</Divider>
        </SubHeader>
        <LogoutButton onClick={handleLogout}>
          <LogoutIcon src={logoutIcon} alt="Logout" />
        </LogoutButton>
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
