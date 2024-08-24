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

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoImage src={logo} alt="Logo" />
      </LogoWrapper>
      <HeaderBlock>
        <SubHeader>
          <HeaderTitle>Medicine Store</HeaderTitle>
          <Divider>Dashboard | vendor@gmail.com</Divider>
        </SubHeader>
        <LogoutButton>
          <LogoutIcon src={logoutIcon} alt="Logout" />
        </LogoutButton>
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
