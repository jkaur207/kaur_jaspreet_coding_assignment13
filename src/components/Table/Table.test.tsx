import { render, screen } from '@testing-library/react';
import Table from './Table';

test('Table is visible', () => {
  render(
    <Table
      tableHeader={[{ text: 'Header 1' }, { text: 'Header 2' }]}
      tableRows={[[{ text: 'Row 1 Cell 1' }, { text: 'Row 1 Cell 2' }]]}
      tableFooter={[{ text: 'Footer Cell 1' }, { text: 'Footer Cell 2' }]}
    />
  );

  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeVisible();
});

test('Table background color changes when disabled', () => {
  render(
    <Table
      disabled={true}
      tableHeader={[{ text: 'Header 1' }, { text: 'Header 2' }]}
      tableRows={[[{ text: 'Row 1 Cell 1' }, { text: 'Row 1 Cell 2' }]]}
      tableFooter={[{ text: 'Footer Cell 1' }, { text: 'Footer Cell 2' }]}
    />
  );

  const tableElement = screen.getByRole('table');
  expect(tableElement).toHaveStyle('background-color: lightgray'); 
});

