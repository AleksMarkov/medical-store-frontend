//Sidebar.jsx
import React from "react";
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

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    {
      label: "Dashboard",
      iconOn: dashboardIconOn,
      iconOff: dashboardIconOff,
    },
    {
      label: "All orders",
      iconOn: shoppingCartIconOn,
      iconOff: shoppingCartIconOff,
    },
    {
      label: "All products",
      iconOn: productsIconOn,
      iconOff: productsIconOff,
    },
    {
      label: "All suppliers",
      iconOn: suppliersIconOn,
      iconOff: suppliersIconOff,
    },
    {
      label: "All customers",
      iconOn: customersIconOn,
      iconOff: customersIconOff,
    },
  ];

  return (
    <SidebarContainer>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            isActive={activePage === item.label}
            onClick={() => setActivePage(item.label)}
          >
            <IconWrapper
              src={activePage === item.label ? item.iconOn : item.iconOff}
              alt={item.label}
            />
          </MenuItem>
        ))}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
