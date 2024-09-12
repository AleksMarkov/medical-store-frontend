// SharedLayout.styled.jsx
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 1440px) {
    width: 1024px;
    height: 768px;
  }
  @media (max-width: 1024px) {
    width: 768px;
    height: 1024px;
  }

  @media (max-width: 768px) {
    width: 375px;
    height: 812px;
  }
`;

export const BodyContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 1440px) {
    width: 1024px;
    height: 688px;
  }

  @media (max-width: 1024px) {
    width: 768px;
    height: 944px;
  }

  @media (max-width: 768px) {
    width: 375px;
    height: 732px;
  }
`;
