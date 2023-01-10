export interface IDropdown {
  options?: IOption[];
  icon?: React.ReactNode,
  onChange: (id : string) => void,
  title?: string,
}

export interface IOption {
  name: string;
  id: string;
  active?: boolean,
//   handleClick?: (value: string, id: string) => void;
//   handleClick?: (id : string) => void
//   handleClick?: () => void;
}
