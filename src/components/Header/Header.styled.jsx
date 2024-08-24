//Header.styled.jsx
import styled from "styled-components";
// import logo from "../../assets/svg/logo.svg";
// import logout from "../../assets/svg/logout.svg";

export const HeaderContainer = styled.div`
  // position: relative;
  width: 1440px;
  height: 80px;
  background-color: var(--background-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 20px;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const HeaderBlock = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
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
`;

export const Divider = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
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
`;

export const LogoutIcon = styled.img`
  width: 16px;
  height: 16px;
`;
