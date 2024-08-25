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
import { AuthContext } from "../../context/AuthContext";

const Header = ({ activePage }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogoClick = () => {
    if (user) {
      return;
    } else {
      navigate("/login");
    }
  };

  return (
    <HeaderContainer>
      <LogoWrapper onClick={handleLogoClick}>
        <LogoImage src={logo} alt="Logo" />
      </LogoWrapper>
      <HeaderBlock>
        <SubHeader>
          <HeaderTitle>Medicine Store</HeaderTitle>
          <Divider>
            {activePage} | {user ? user.email : "Loading..."}
          </Divider>{" "}
          {/* Show user email */}
        </SubHeader>
        <LogoutButton onClick={handleLogout}>
          <LogoutIcon src={logoutIcon} alt="Logout" />
        </LogoutButton>
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
