import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children?: React.ReactNode;  // Made 'children' optional
  disabled?: boolean;
  bgColor?: string;
  label?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007BFF')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;

  &:hover {
    background-color: ${(props) => !props.disabled && '#0056b3'};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, label, disabled = false, onClick }) => {

  const handleClick = onClick ? onClick : () => {};

  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {children || label}  {/* Render 'children' or 'label' */}
    </StyledButton>
  );
};

export default Button;
