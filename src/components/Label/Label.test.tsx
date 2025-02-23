import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label htmlFor="inputId">Label Text</Label>);
  const labelElement = screen.getByText(/label text/i);
  expect(labelElement).toBeVisible();
});

test('Label background color changes with bgColor prop', () => {
  render(<Label bgcolor="yellow">Label Text</Label>);
  const labelElement = screen.getByText(/label text/i);
  expect(labelElement).toHaveStyle('background-color: yellow');
});

test('Label font weight changes with fontWeight prop', () => {
  render(<Label fontWeight="400">Label Text</Label>);
  const labelElement = screen.getByText(/label text/i);
  expect(labelElement).toHaveStyle('font-weight: 400');
});

test('Label background color changes when disabled', () => {
  render(<Label disabled={true} bgcolor="blue">Label Text</Label>);
  const labelElement = screen.getByText(/label text/i);
  expect(labelElement).toHaveStyle('background-color: lightgray');
});