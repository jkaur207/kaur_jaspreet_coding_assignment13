import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

// Styled component for the Card container
const StyledCardContainer = styled.div<{ disabled?: boolean }>`
  width: 300px;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : 'white')};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease, opacity 0.3s ease;
`;

// Styled image element for the Card
const StyledCardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 12px;
  border-radius: 8px;
`;

// Styled title for the Card
const StyledCardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #333;
`;

// Styled description for the Card
const StyledCardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ imageSrc, title, description, disabled }) => {
  return (
    <StyledCardContainer data-testid="card-container" disabled={disabled}>
      <StyledCardImage src={imageSrc} alt={title} disabled={disabled} />
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardContainer>
  );
};

export default Card;
