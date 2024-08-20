//Login.styled.jsx
import styled from "styled-components";
import pill from "../../assets/svg/pill.svg";
import elements from "../../assets/svg/elements.svg";
import logo from "../../assets/svg/logo.svg";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: var(--background-dark);
`;

export const LoginContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 800px;
  background: var(--background-light);
  overflow: hidden; /* ensures the elements don't go outside the container */
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: 172px;
  height: 44px;
  left: 100px;
  top: 28px;
`;

export const LogoImage = styled.div`
  width: 44px;
  height: 44px;
  background: url(${logo}) no-repeat center center;
  background-size: contain;
`;

export const LogoText = styled.div`
  margin-left: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--background-dark);
`;

export const PillImage = styled.div`
  position: absolute;
  width: 179px;
  height: 175px;
  left: 520px;
  top: 228px;
  background: url(${pill}) no-repeat center center;
  background-size: contain;
`;

export const ElementsImage = styled.div`
  position: absolute;
  width: 464px;
  height: 345px;
  left: 1161px;
  top: 543px;
  background: url(${elements}) no-repeat center center;
  background-size: contain;
  overflow: hidden; /* ensures only the part within the container is visible */
`;

export const Title = styled.h1`
  position: absolute;
  width: 614px;
  height: 240px;
  left: 100px;
  top: 298px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 54px;
  line-height: 60px;
  color: var(--background-dark);
`;

export const LoginForm = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 323px;
  left: 864px;
  top: 307px;
`;

export const Input = styled.input`
  width: 323px;
  height: 44px;
  margin-bottom: 20px;
  padding: 13px 18px;
  background: var(--background-white);
  border: 1px solid var(--label-color);
  border-radius: 60px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: var(--label-color);
`;

export const Button = styled.button`
  width: 323px;
  height: 44px;
  background: var(--accent-green);
  border-radius: 60px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: var(--background-white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
