//Login.styled.jsx
import styled from "styled-components";
import pill from "../../assets/svg/pill.svg";
import elements from "../../assets/svg/elements.svg";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #1d1e21;
`;

export const LoginContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 800px;
  background: #f7f8fa;
  overflow: hidden; /* добавлено */
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
`;

export const Title = styled.h1`
  position: absolute;
  width: 614px;
  height: 240px;
  left: 100px;
  top: 298px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 60px;
  color: #1d1e21;
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
  background: #ffffff;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: rgba(29, 30, 33, 0.4);
`;

export const Button = styled.button`
  width: 323px;
  height: 44px;
  background: #59b17a;
  border-radius: 60px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
