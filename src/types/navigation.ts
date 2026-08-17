export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}