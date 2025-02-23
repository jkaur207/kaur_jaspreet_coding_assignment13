import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ disabled, color }) => (disabled ? 'gray' : color || '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Text: React.FC<TextProps> = ({ children, fontSize, fontWeight, color, disabled }) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight} color={color} disabled={disabled}>
      {children}
    </StyledText>
  );
};

export default Text;