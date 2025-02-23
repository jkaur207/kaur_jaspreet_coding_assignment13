import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img is visible', () => {
  render(
    <Img
      src="https://via.placeholder.com/150"
      alt="Placeholder Image"
    />
  );

  const imgElement = screen.getByAltText('Placeholder Image');
  expect(imgElement).toBeVisible();
});

test('Img background color changes when disabled', () => {
  render(
    <Img
      src="https://via.placeholder.com/150"
      alt="Placeholder Image"
      disabled={true}
    />
  );

  const imgContainer = screen.getByTestId('img-container');

  expect(imgContainer).toHaveStyle('background-color: lightgray');
});