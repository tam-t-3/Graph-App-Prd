import React from "react";
import styled from "styled-components";

type Props = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactElement
}

const Button: React.FC<Props> = ({ clickHandler, children }) => {
  return(
    <LayoutButton onClick={clickHandler}>
      {children}
    </LayoutButton>
  )
};

const LayoutButton = styled.button`
text-align: center;
text-decoration: none;
&:hover {
  cursor: pointer;
  background: #dcdcdc;
`;

export default Button;
