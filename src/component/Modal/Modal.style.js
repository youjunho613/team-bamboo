import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  z-index: 5;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 70px;

  z-index: 6;

  background-color: #a4be7b;
  border-radius: 70px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const Label = styled.label`
  width: 570px;

  align-self: center;

  margin-top: 20px;

  font-size: 2rem;
  font-weight: 600;
`;

export const FileLabel = styled.label`
  margin: 10px auto;
  padding: 20px;

  background-color: #e5d9b6;
  border-radius: 30px;

  font-size: 2rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 600px;
  height: 30px;
  min-height: ${props => props.height}px;

  margin: 10px;
  padding: 10px;

  border: none;
  border-radius: 45px;
  background-color: rgb(200, 200, 200);

  font-size: 2rem;
  letter-spacing: 0.5px;

  resize: none;
  &:focus {
    outline: none;
    background-color: rgb(230, 230, 230);
  }
`;

export const ErrorMsg = styled.p`
  align-self: center;

  margin: 10px;

  font-size: 1.6rem;
  color: red;
`;

export const FindPwLink = styled(Link)`
  align-self: center;
  text-align: center;

  margin: 10px;

  font-size: 1.6rem;

  &:hover {
    color: blue;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 20px;
`;
