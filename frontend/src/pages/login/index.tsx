import React, { useState } from "react";
import {
  Container,
  Card,
  Logo,
  LogoContainer,
  FormContainer,
  InputContainer,
  ButtonContainer,
  Label,
} from "./styles";
import { BiLockAlt, BiUser } from "react-icons/bi";

import { useForm } from "react-hook-form";
import logo from "../../assets/supermercado-ifood.svg";

import Particles from "react-tsparticles";
import ParticleConfig from "./backgroundoptions";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    watch,
    errors,
    handleSubmit,
    reset,
    setError,
    setValue,
    getValues,
    trigger,
    control,
  } = useForm<Inputs>();

  const [registering, setRegistering] = useState<boolean>(false);
  return (
    <Container>
      <Particles id="tsparticles" options={ParticleConfig} />
      <Card>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <FormContainer id="loginForm">
          <InputContainer>
            <Label>
              <span>
                <BiUser />
              </span>
              <label>Email</label>
            </Label>
            <input type="text" name="" />
          </InputContainer>
          <InputContainer>
            <Label>
              <BiLockAlt />
              <label>Senha</label>
            </Label>
            <input type="text" name="" />
          </InputContainer>
        </FormContainer>
        <ButtonContainer>
          <button
            onClick={() => setRegistering(true)}
            type="submit"
            form="loginForm"
          >
            Registrar
          </button>
          <button
            onClick={() => setRegistering(false)}
            type="submit"
            form="loginForm"
          >
            Entrar
          </button>
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default Login;
