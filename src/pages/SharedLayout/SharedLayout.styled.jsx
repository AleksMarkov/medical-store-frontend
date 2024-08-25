// SharedLayout.styled.jsx
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1440px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--background-light);
  color: var(--background-dark);

  @media (max-width: 1440px) {
    width: 768px;
    height: 1024px;
  }

  @media (max-width: 768px) {
    width: 375px;
    height: 812px;
  }
`;

export const BodyContainer = styled.div`
  width: 1440px;
  height: 720px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--background-light);
  color: var(--background-dark);

  @media (max-width: 1440px) {
    width: 768px;
    height: 944px;
  }

  @media (max-width: 768px) {
    width: 375px;
    height: 732px;
  }
`;
