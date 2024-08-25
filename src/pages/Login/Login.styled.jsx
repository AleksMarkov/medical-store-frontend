//Login.styled.jsx
import styled from "styled-components";
import pill from "../../assets/svg/pill.svg";
import elements from "../../assets/svg/elements.svg";
import logo from "../../assets/svg/logo.svg";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background-dark);
`;

export const LoginContainer = styled.div`
  width: 1340px;
  height: 772px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: var(--background-light);
  overflow: hidden;
  padding-top: 28px;
  padding-left: 100px;
  gap: 226px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 175px;
  height: 44px;
`;

export const LogoImage = styled.div`
  width: 44px;
  height: 44px;
  background: url(${logo}) no-repeat center center;
  background-size: contain;
`;

export const LogoText = styled.div`
  margin-left: 14px;
  width: 130px;
  height: 24px;
  padding: 10px 0px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: var(--background-dark);
`;

export const PillImage = styled.div`
  position: absolute;
  width: 179px;
  height: 175px;
  left: 516px;
  top: 190px;
  background: url(${pill}) no-repeat center center;
  background-size: contain;
`;

export const ElementsImage = styled.div`
  position: absolute;
  width: 300px;
  height: 270px;
  left: 1140px;
  top: 548px;
  background: url(${elements}) no-repeat center center;
  background-size: contain;
  overflow: hidden;
`;
export const BodyContainer = styled.div`
  width: 1087px;
  height: 240px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 150px;
`;

export const Title = styled.h1`
  width: 614px;
  height: 240px;
  font-weight: 600;
  font-size: 54px;
  line-height: 60px;
  color: var(--background-dark);

  span {
    color: var(--accent-green);
  }
`;

export const LoginForm = styled.form`
  width: 323px;
  height: 186px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
`;

export const Input = styled.input`
  width: 287px;
  height: 18px;
  padding: 13px 18px;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 60px;
  font-size: 12px;
  line-height: 18px;
  color: var(--label-color);
`;

export const Button = styled.button`
  width: 323px;
  height: 44px;
  margin-top: 26px;
  background: var(--accent-green);
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--background-white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
