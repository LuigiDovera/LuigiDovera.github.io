import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  #tsparticles {
    z-index: -999;
  }
`;

export const Card = styled.div`
  padding: 2%;
  background-color: ${colors.lightGrey};
  border-radius: 10px;
  display: grid;
  grid-template-rows: 25% auto 10%;
  grid-template-columns 25% 50% 25%;
  height: fit-content;
  min-height: 60%;
  max-height: 100vh;
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0px;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

export const FormContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20% 0;
  grid-row: 2;
  grid-column: 1/4;
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    width: 100%;
    height: 50%;
    border: 1px solid ${colors.darkGrey};
    border-radius: 6px;
    font-size: 1.5rem;
    padding: 0 8px;
  }
`;

export const Label = styled.div`
  font-size: 200%;
  display: flex;
  align-items: center;
  margin: 0;
  label {
    margin: 0;
  }
  span {
    margin-right: 0.4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10%;
  grid-row: 3;
  grid-column: 1/4;
  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 30px;
    font-size: 150%;
    background-color: ${colors.lightGreen};
    border-color: ${colors.green};
    :hover {
      background-color: ${colors.green};
      border-color: ${colors.green};
    }
    :focus {
      outline: none;
      border: none;
    }
  }
`;
