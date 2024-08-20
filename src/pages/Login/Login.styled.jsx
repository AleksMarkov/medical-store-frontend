//Login.styled.jsx
import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #6200ee;
    color: white;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
`;
