import { JSX } from "react";

type NavItem = {
    icon: JSX.Element;
    label: string;
    onClick?: () => void;
  };
  export type {NavItem} 