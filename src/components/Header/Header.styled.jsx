//Header.styled.jsx
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 1440px;
  height: 80px;
  background-color: var(--background-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1440px) {
    width: ${(props) =>
      props.activePage === "Dashboard" ? "1344px" : "1024px"};
  }

  @media (max-width: 1343px) {
    width: ${(props) =>
      props.activePage === "Dashboard" ? "768px" : "1024px"};
  }

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 375px;
  }
`;
export const BurgerImage = styled.img`
  @media (min-width: 1441px) {
    display: none;
  }

  @media (max-width: 1440px) {
    width: 32px;
    height: 32px;
    padding-left: 32px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    padding-left: 20px;
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 20px;

  @media (max-width: 1440px) {
    padding-left: 16px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    padding: 24px 20px;
  }
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const HeaderBlock = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;

  @media (max-width: 1440px) {
    width: 576px;
    padding-left: 12px;
  }

  @media (max-width: 768px) {
    width: 251px;
    padding-left: 0px;
  }
`;

export const SubHeader = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  color: var(--background-dark);
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    text-align: left;
  }
`;

export const Divider = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 768px) {
  }
`;

export const LogoutButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: var(--accent-green);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  box-shadow: 0px -1px 7px rgba(71, 71, 71, 0.05);

  &:hover {
    background-color: var(--accent-btn);
  }

  @media (max-width: 1440px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoutIcon = styled.img`
  width: 16px;
  height: 16px;

  @media (max-width: 1440px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
