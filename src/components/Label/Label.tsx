import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  text?: string;
  htmlFor?: string;
  disabled?: boolean;
  bgcolor?: string;
  fontWeight?: string;
  children?: React.ReactNode;  // Add children prop here
};

const StyledLabel = styled.label<LabelProps>`
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  background-color: ${({ disabled, bgcolor }) => (disabled ? 'lightgray' : bgcolor || 'blue')};
  padding: 5px 10px;
  border-radius: 5px;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled, bgcolor, fontWeight, children }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} bgcolor={bgcolor} fontWeight={fontWeight}>
      {text || children}
    </StyledLabel>
  );
};

export default Label;
