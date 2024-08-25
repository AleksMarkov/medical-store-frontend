//Header.jsx
import React, { useContext } from "react";
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
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext

const Header = ({ activePage }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Use AuthContext to get user info

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogoClick = () => {
    if (user) {
      // If the user is authenticated, stay on the current page
      return;
    } else {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  };

  return (
    <HeaderContainer>
      <LogoWrapper onClick={handleLogoClick}>
        {/* Use onClick to handle logo click */}
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
