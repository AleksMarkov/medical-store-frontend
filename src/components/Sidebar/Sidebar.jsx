//Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarContainer,
  Menu,
  MenuItem,
  IconWrapper,
} from "./Sidebar.styled";

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

const Sidebar = () => {
  const location = useLocation();

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
    <SidebarContainer>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem key={item.label} isActive={location.pathname === item.path}>
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
    </SidebarContainer>
  );
};

export default Sidebar;
