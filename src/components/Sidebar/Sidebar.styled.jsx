//Sidebar.styled.jsx
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 80px;
  height: 680px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--background-light);
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  position: absolute;
  width: 44px;
  height: 276px;
  left: 18px;
  top: 119px;
`;

export const MenuItem = styled.div`
  width: 44px;
  height: 44px;
  background-color: var(--background-white);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  box-shadow: 0px -1px 7px rgba(71, 71, 71, 0.05);

  &:hover {
    background-color: var(--background-accent-light);
  }
`;

export const IconWrapper = styled.img`
  width: 16px;
  height: 16px;
`;
