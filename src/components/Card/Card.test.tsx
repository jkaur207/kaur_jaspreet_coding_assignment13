import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card is visible', () => {
  render(
    <Card
      imageSrc="https://via.placeholder.com/300x150"
      title="Card Title"
      description="This is a description of the card."
    />
  );

  const cardElement = screen.getByTestId('card-container');
  expect(cardElement).toBeVisible();
});

test('Card background color changes when disabled', () => {
  render(
    <Card
      imageSrc="https://via.placeholder.com/300x150"
      title="Card Title"
      description="This is a description of the card."
      disabled={true}
    />
  );

  const cardContainer = screen.getByTestId('card-container');

  expect(cardContainer).toHaveStyle('background-color: lightgray');
});