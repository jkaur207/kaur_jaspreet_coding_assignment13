import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

// Container for the Hero Image and Text
const StyledHeroImageContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : '#ccc')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  overflow: hidden;
`;

// Styled image element
const StyledHeroImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

// Text overlay for the Hero Image
const StyledHeroText = styled.div<{ disabled?: boolean }>`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, text, disabled }) => {
  return (
    <StyledHeroImageContainer data-testid="hero-image-container" disabled={disabled}>
      <StyledHeroImage src={src} alt={alt} disabled={disabled} />
      <StyledHeroText disabled={disabled}>{text}</StyledHeroText>
    </StyledHeroImageContainer>
  );
};

export default HeroImage;