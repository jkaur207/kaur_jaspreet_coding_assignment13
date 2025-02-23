import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.tfoot`
  background-color: #f2f2f2;
`;

const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default TableFooter;


