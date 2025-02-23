import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text is visible', () => {
  render(<Text>Sample text content.</Text>);
  const textElement = screen.getByText(/sample text content/i);
  expect(textElement).toBeVisible();
});

test('Text style changes with props', () => {
  render(<Text fontSize="20px" fontWeight="bold" color="blue">Styled Text</Text>);
  const textElement = screen.getByText(/styled text/i);
  expect(textElement).toHaveStyle('font-size: 20px');
  expect(textElement).toHaveStyle('font-weight: bold');
  expect(textElement).toHaveStyle('color: blue');
});

test('Text becomes grey and cursor changes when disabled', () => {
  render(<Text disabled={true}>Disabled Text</Text>);
  const textElement = screen.getByText(/disabled text/i);
  expect(textElement).toHaveStyle('color: gray');
  expect(textElement).toHaveStyle('cursor: not-allowed');
});