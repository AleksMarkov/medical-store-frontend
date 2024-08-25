//BurgerMenu.styled.jsx
import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (min-width: 1441px) {
    display: none;
  }

  @media (max-width: 1440px) {
    width: 84px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--background-light);
  }

  @media (max-width: 768px) {
    width: 78px;
    height: 100vh;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
  gap: 14px;
  width: 44px;

  @media (max-width: 768px) {
    width: 38px;
  }
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

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    border-radius: 19px;
  }
`;

export const IconWrapper = styled.img`
  width: 16px;
  height: 16px;

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
`;
