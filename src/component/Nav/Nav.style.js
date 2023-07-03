import { styled } from "styled-components";

export const Button = styled.button`
  width: 240px;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  border-radius: 30px;

  margin-bottom: 10px;

  font-size: 35px;
  text-align: center;

  transition: 200ms;

  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;

export const Nav = styled.nav`
  position: fixed;

  top: 0;
  left: 0;

  width: 280px;
  height: 100vh;

  padding: 150px 20px 20px 20px;

  background-color: #e5d9b6;
  z-index: 2;
`;
