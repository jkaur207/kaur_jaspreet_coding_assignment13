import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton is visible', () => {
  render(
    <RadioButton
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]}
    />
  );

  const option1 = screen.getByLabelText('Option 1');
  const option2 = screen.getByLabelText('Option 2');

  expect(option1).toBeVisible();
  expect(option2).toBeVisible();
});

test('RadioButton background color changes when disabled', () => {
  render(
    <RadioButton
      disabled={true}
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]}
    />
  );

  const radioButtonGroup = screen.getByRole('group');

  expect(radioButtonGroup).toHaveStyle('background-color: lightgray');
});