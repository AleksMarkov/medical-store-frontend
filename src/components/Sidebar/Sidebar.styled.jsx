//Sidebar.styled.jsx
import styled from "styled-components";

export const SidebarContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 80px;
  height: 721px;
  left: 0px;
  top: 79px;
  background: #f7f8fa;
  border-width: 1px 1px 0px 0px;
  border-style: solid;
  border-color: rgba(29, 30, 33, 0.1);
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
  background: #ffffff;
  box-shadow: 0px -1px 7px rgba(71, 71, 71, 0.05);
  position: relative;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 14px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
