import { styled } from "styled-components";

import * as constants from "./Button.constants";

export const Button = styled.button`
  ${props => `
  width: ${constants.BUTTON_WIDTH_MAP[props.position]}px;
  height: ${constants.BUTTON_HEIGHT_MAP[props.position]}px;
  background-color: ${constants.BUTTON_COLOR_MAP[props.position]};
  border-radius: ${constants.BUTTON_BORDER_MAP[props.position]}px;
  `}

  align-self: center;
  margin: ${props => `0px ${props.sideMargin}px`};
  font-size: 1.6rem;
  font-weight: 600;
  background: ${props => props.background};
  transition: 500ms;

  ${props =>
    props.hoverStyle === "shadow"
      ? `
      &:hover
      {background-color: transparent;
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
        font-size: 1.8rem;`
      : ""}
`;
