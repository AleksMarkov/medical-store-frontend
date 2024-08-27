//Header.jsx
import React, { useState, useContext } from "react";
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
  BurgerImage,
} from "./Header.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Modal from "../Modal/Modal";
import burger from "../../assets/svg/burger.svg";
import logo from "../../assets/svg/logo.svg";
import logoutIcon from "../../assets/svg/logout.svg";
import useLogout from "../../helpers/logoutHelper"; // Импорт новой функции
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ activePage, setActivePage }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { logout } = useLogout(); // Использование функции

  const handleLogoClick = () => {
    if (user) {
      return;
    } else {
      navigate("/login");
    }
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <HeaderContainer>
      <BurgerImage src={burger} alt="burger" onClick={toggleBurgerMenu} />
      <LogoWrapper onClick={handleLogoClick}>
        <LogoImage src={logo} alt="Logo" />
      </LogoWrapper>
      <HeaderBlock>
        <SubHeader>
          <HeaderTitle>Medicine Store</HeaderTitle>
          <Divider>
            {activePage} | {user ? user.email : "Loading..."}
          </Divider>
        </SubHeader>
        <LogoutButton onClick={() => logout(navigate)}>
          <LogoutIcon src={logoutIcon} alt="Logout" />
        </LogoutButton>
      </HeaderBlock>
      {isBurgerMenuOpen && (
        <Modal>
          <BurgerMenu
            onClose={toggleBurgerMenu}
            setActivePage={setActivePage}
          />
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
