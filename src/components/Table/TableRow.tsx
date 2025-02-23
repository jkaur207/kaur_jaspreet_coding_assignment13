import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : 'transparent')};
`;

const TableRow: React.FC<{ children: React.ReactNode; disabled?: boolean }> = ({ children, disabled }) => {
  return <StyledRow disabled={disabled}>{children}</StyledRow>;
};

export default TableRow;

