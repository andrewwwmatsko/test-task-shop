import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <Link className={css.logo} to="/">
        Shop
      </Link>

      <Navigation />
    </header>
  );
}
