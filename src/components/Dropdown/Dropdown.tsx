import React, { useState } from 'react';
import styled from 'styled-components';

export type DropdownItem = {
  label: string;
  value: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  disabled?: boolean;
};

const StyledDropdown = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'darkgray' : 'black')};
`;

const Dropdown: React.FC<DropdownProps> = ({ items, disabled }) => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
  };

  return (
    <StyledDropdown disabled={disabled} value={selectedItem} onChange={handleChange}>
      <option value="" disabled>
        Select an option
      </option>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
