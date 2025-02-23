import { render, screen } from '@testing-library/react';
import Button from './Button';
import React from 'react';

test('Button renders with label prop', () => {
  render(<Button label="Test Button">Test Button</Button>);  // Using both 'label' and 'children'
  expect(screen.getByText('Test Button')).toBeVisible();
});

test('Button is visible', () => {
  render(<Button label="Click Me">Click Me</Button>);  // Using both 'label' and 'children'
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeVisible();
});

test('Button background color changes when disabled', () => {
  render(<Button label="Click Me" disabled={true}>Click Me</Button>);  // Using both 'label' and 'children'
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle('background-color: gray');
});
