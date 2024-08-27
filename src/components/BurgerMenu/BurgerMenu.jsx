//BurgerMenu.jsx
// BurgerMenu.jsx
import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  Menu,
  MenuItem,
  IconWrapper,
  CloseButton,
  ModalOverlay,
  LogoutButton,
  LogoutIcon,
} from "./BurgerMenu.styled";
import useLogout from "../../helpers/logoutHelper"; // Импорт новой функции
import closeIcon from "../../assets/svg/close.svg";
import logoutIcon from "../../assets/svg/logout.svg";
import dashboardIconOn from "../../assets/svg/dashboardOn.svg";
import dashboardIconOff from "../../assets/svg/dashboardOff.svg";
import shoppingCartIconOn from "../../assets/svg/shopping-cartOn.svg";
import shoppingCartIconOff from "../../assets/svg/shopping-cartOff.svg";
import productsIconOn from "../../assets/svg/productsOn.svg";
import productsIconOff from "../../assets/svg/productsOff.svg";
import suppliersIconOn from "../../assets/svg/suppliersOn.svg";
import suppliersIconOff from "../../assets/svg/suppliersOff.svg";
import customersIconOn from "../../assets/svg/customersOn.svg";
import customersIconOff from "../../assets/svg/customersOff.svg";

const BurgerMenu = ({ setActivePage, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useLogout(); // Использование функции
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      iconOn: dashboardIconOn,
      iconOff: dashboardIconOff,
    },
    {
      path: "/orders",
      label: "Orders",
      iconOn: shoppingCartIconOn,
      iconOff: shoppingCartIconOff,
    },
    {
      path: "/products",
      label: "Products",
      iconOn: productsIconOn,
      iconOff: productsIconOff,
    },
    {
      path: "/suppliers",
      label: "Suppliers",
      iconOn: suppliersIconOn,
      iconOff: suppliersIconOff,
    },
    {
      path: "/customers",
      label: "Customers",
      iconOn: customersIconOn,
      iconOff: customersIconOff,
    },
  ];

  return (
    <ModalOverlay>
      <SidebarContainer ref={menuRef}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} width={32} height={32} alt="Close" />
        </CloseButton>
        <Menu>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              isActive={location.pathname === item.path}
              onClick={() => {
                setActivePage(item.label);
                onClose();
              }}
            >
              <Link to={item.path}>
                <IconWrapper
                  src={
                    location.pathname === item.path ? item.iconOn : item.iconOff
                  }
                  alt={item.label}
                />
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <LogoutButton onClick={() => logout(navigate)}>
          <LogoutIcon src={logoutIcon} alt="Logout" />
        </LogoutButton>
      </SidebarContainer>
    </ModalOverlay>
  );
};

export default BurgerMenu;
