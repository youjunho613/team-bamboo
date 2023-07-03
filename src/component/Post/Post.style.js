import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContentLink = styled(Link)``;

export const Flex = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-bottom: 20px;
`;

export const BambooCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  width: 650px;
  min-height: 250px;

  margin: 25px;
  padding: 25px;

  background-color: #a4be7b;
  border-radius: 70px;

  color: rgb(0, 0, 0);

  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const ProfilePhoto = styled.img`
  width: 90px;
  height: 90px;

  background-color: #ffffff;
  border-radius: 100%;
`;

export const P = styled.p`
  margin: 10px;

  font-size: ${props => props.fontSize}px;
  letter-spacing: 2px;
  line-height: ${props => props.fontSize + 5}px;
`;

export const Button = styled.button`
  position: absolute;
  right: 20px;

  width: 45px;
  height: 45px;

  border-radius: 100%;
  &::after {
    position: absolute;

    font-size: 24px;
    font-weight: 700;

    transform: translate(-50%, -75%);
    content: "...";
  }
`;
