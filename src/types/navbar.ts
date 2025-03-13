interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarButton {
  label: string;
  href: string;
}

export interface NavbarContent {
  logo: string;
  links: NavbarLink[];
  buttons: NavbarButton[];
}
