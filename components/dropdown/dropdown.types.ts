export interface IDropdown {
  options?: Option[];
  icon?: React.ReactNode,
}

export interface Option {
  name: string;
  id: string;
  handleClick?: (value: string, id: string) => void;
}
