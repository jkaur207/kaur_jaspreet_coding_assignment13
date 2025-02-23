export interface DropdownItemProps {
  label: string;
  value: string;
}

export interface DropdownProps {
  items: DropdownItemProps[];
  disabled?: boolean;
}
