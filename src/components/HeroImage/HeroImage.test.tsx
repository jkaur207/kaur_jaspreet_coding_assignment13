import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';


test('HeroImage is visible', () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/1200x600"
      alt="Hero Image"
      text="Welcome to Our Site"
    />
  );

  const imgElement = screen.getByAltText('Hero Image');
  expect(imgElement).toBeVisible();
  const textElement = screen.getByText('Welcome to Our Site');
  expect(textElement).toBeVisible();
});

test('HeroImage background color changes when disabled', () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/1200x600"
      alt="Hero Image"
      text="Welcome to Our Site"
      disabled={true}
    />
  );

  const heroImageContainer = screen.getByTestId('hero-image-container');

  expect(heroImageContainer).toHaveStyle('background-color: lightgray');
});