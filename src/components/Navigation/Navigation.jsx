import { NavLink } from "react-router-dom";

import clsx from "clsx";

import css from "./Navigation.module.css";

const createnavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/products" className={createnavLinkClass}>
        Products
      </NavLink>
    </nav>
  );
}
