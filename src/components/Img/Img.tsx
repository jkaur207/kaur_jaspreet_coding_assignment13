import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

// Styled component for the image container
const StyledImgContainer = styled.div<{ disabled?: boolean }>`
   display: inline-block;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : '#ccc')};
  padding: 8px;
  width: 300px;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}
`;

// Styled image element
const StyledImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return (
    <StyledImgContainer data-testid="img-container" disabled={disabled}>
      <StyledImg src={src} alt={alt} disabled={disabled} />
    </StyledImgContainer>
  );
};

export default Img;