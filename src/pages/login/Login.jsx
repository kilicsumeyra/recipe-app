import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledImg,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const userInfo = {
    username: "eypes",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Recipe App</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" />
          <StyledInput type="password" placeholder="Password" />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
