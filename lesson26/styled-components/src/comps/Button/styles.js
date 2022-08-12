import styled, {css, keyframes} from "styled-components"

const outlinedButtonStyles = css`
  border: 1px solid red;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ButtonStyled = styled.button`
  font-size: ${({theme}) => theme.$fontXl};
  height: ${({height}) => height + "px"};
  animation: ${rotate} 6s infinite ease;
  color: white;
  border: none;
  outline: none;
  background-color: #790606;
  box-shadow: ${({theme}) => theme.$shadowXl};
  ${({variant}) => (variant === "outlined" ? outlinedButtonStyles : "")}
`
