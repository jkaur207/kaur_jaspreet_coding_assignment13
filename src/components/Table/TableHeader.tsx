import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.thead`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
`;

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default TableHeader;



