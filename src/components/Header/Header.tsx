import { type ReactNode } from "react";

import styles from "./Header.module.scss";

const Header = ({ children }: { children: ReactNode }) => (
  <header className={styles.header}>
    <h1 className={styles.header__heading}>Where in the world?</h1>

    {children}
  </header>
);

export default Header;
