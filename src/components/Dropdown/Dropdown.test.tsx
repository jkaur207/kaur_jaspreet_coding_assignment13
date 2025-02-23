import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  render(
    <Dropdown
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]}
    />
  );

  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toBeVisible();
});

test('Dropdown background color changes when disabled', () => {
  render(
    <Dropdown
      disabled={true}
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]}
    />
  );

  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toHaveStyle('background-color: lightgray');
});