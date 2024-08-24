//SharedLayout.styled.jsx
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--background-light);
  color: var(--background-dark);
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px); /* 80px - высота заголовка */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--background-light);
  color: var(--background-dark);
`;
