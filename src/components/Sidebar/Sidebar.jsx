//Sidebar.jsx
import React from "react";
import {
  SidebarContainer,
  Menu,
  MenuItem,
  IconWrapper,
} from "./Sidebar.styled";

import dashboardIcon from "../../assets/svg/dashboard.svg";
import shoppingCartIcon from "../../assets/svg/shopping-cart.svg";
import productsIcon from "../../assets/svg/products.svg";
import suppliersIcon from "../../assets/svg/suppliers.svg";
import customersIcon from "../../assets/svg/customers.svg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Menu>
        <MenuItem>
          <IconWrapper src={dashboardIcon} alt="Dashboard" />
        </MenuItem>
        <MenuItem>
          <IconWrapper src={shoppingCartIcon} alt="All orders" />
        </MenuItem>
        <MenuItem>
          <IconWrapper src={productsIcon} alt="All products" />
        </MenuItem>
        <MenuItem>
          <IconWrapper src={suppliersIcon} alt="All suppliers" />
        </MenuItem>
        <MenuItem>
          <IconWrapper src={customersIcon} alt="All customers" />
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
