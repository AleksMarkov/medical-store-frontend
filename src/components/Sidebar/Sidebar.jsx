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
          <IconWrapper>
            <img src={dashboardIcon} alt="Dashboard" />
          </IconWrapper>
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            <img src={shoppingCartIcon} alt="Orders" />
          </IconWrapper>
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            <img src={productsIcon} alt="Products" />
          </IconWrapper>
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            <img src={suppliersIcon} alt="Suppliers" />
          </IconWrapper>
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            <img src={customersIcon} alt="Customers" />
          </IconWrapper>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
