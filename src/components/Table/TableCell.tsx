import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.td<{ disabled?: boolean; color?: string }>`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : 'transparent')};
  color: ${({ color }) => color || 'inherit'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const TableCell: React.FC<{ children: React.ReactNode; disabled?: boolean; color?: string }> = ({
  children,
  disabled,
  color
}) => {
  return <StyledCell disabled={disabled} color={color}>{children}</StyledCell>;
};

export default TableCell;



