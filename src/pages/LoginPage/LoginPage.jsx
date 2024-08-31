//Login.jsx
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  BodyContainer,
} from "./LoginPage.styled";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/user/login", data);
      const { accessToken, refreshToken, user } = response.data;
      login(accessToken, refreshToken, user);
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
        <BodyContainer>
          <Title>
            Your medication, delivered Say goodbye to all{" "}
            <span>your healthcare </span>
            worries with us
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
        </BodyContainer>
        <ElementsImage />
      </LoginContainer>
    </MainContainer>
  );
};

export default LoginPage;
