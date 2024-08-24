//Login.jsx
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { loginSchema } from "../../schemas/loginSchema";
import { AuthContext } from "../../context/AuthContext";
import {
  MainContainer,
  LoginContainer,
  LoginForm,
  Input,
  Button,
  Title,
  PillImage,
  ElementsImage,
  LogoContainer,
  LogoImage,
  LogoText,
} from "./Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/user/login", data);
      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);
      login(token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Ошибка входа", error);
    }
  };

  return (
    <MainContainer>
      <LoginContainer>
        <LogoContainer>
          <LogoImage />
          <LogoText>E-Pharmacy</LogoText>
        </LogoContainer>
        <Title>
          Your medication, delivered Say goodbye to all your healthcare worries
          with us
        </Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="username"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Button type="submit">Log In</Button>
        </LoginForm>
        <PillImage />
        <ElementsImage />
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
