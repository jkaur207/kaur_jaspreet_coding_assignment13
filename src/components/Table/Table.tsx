import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : 'white')};
`;

const Table: React.FC<TableProps> = ({ tableHeader, tableRows, tableFooter, disabled }) => {
  return (
    <StyledTable disabled={disabled}>
      <TableHeader>
        <TableRow>
          {tableHeader.map((header, index) => (
            <th key={index} style={{ color: header.color }}>{header.text}</th>
          ))}
        </TableRow>
      </TableHeader>
      <tbody>
        {tableRows.map((row, rowIndex) => (
          <TableRow key={rowIndex} disabled={disabled}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex} disabled={disabled} color={cell.color}>{cell.text}</TableCell> 
            ))}
          </TableRow>
        ))}
      </tbody>
      <TableFooter>
        <TableRow>
          {tableFooter.map((footer, index) => (
            <TableCell key={index} color={footer.color}>{footer.text}</TableCell>
          ))}
        </TableRow>
      </TableFooter>
    </StyledTable>
  );
};

export default Table;

