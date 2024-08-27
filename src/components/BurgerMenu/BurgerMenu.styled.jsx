//BurgerMenu.styled.jsx
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-menu);
  z-index: 1000;
`;

export const SidebarContainer = styled.div`
  @media (min-width: 1441px) {
    display: none;
  }

  @media (max-width: 1440px) {
    width: 84px;
    height: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-light);
  }

  @media (max-width: 1024px) {
    width: 84px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-light);
  }

  @media (max-width: 768px) {
    width: 78px;
    height: 812px;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 0;
  gap: 14px;
  width: 44px;

  @media (max-width: 768px) {
    padding: 92px 0;
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

export const CloseButton = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 20px;
  left: 38px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    top: 20px;
    left: 32px;
    gap: 0px;
    opacity: 0px;
  }
`;

export const LogoutButton = styled.button`
  @media (min-width: 1441px) {
    display: none;
  }

  width: 44px;
  height: 44px;
  background-color: var(--accent-green);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  border: none;
  box-shadow: 0px -1px 7px rgba(71, 71, 71, 0.05);

  &:hover {
    background-color: var(--accent-btn);
  }

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    border-radius: 19px;
  }
`;

export const LogoutIcon = styled.img`
  @media (min-width: 1441px) {
    display: none;
  }

  @media (max-width: 1440px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
