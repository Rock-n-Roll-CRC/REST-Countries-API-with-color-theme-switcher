import { useTheme } from "../../hooks/useTheme";

import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { nextTheme, icon, toggleTheme } = useTheme();

  return (
    <button className={styles["theme-switcher"]} onClick={toggleTheme}>
      <svg className={styles["theme-switcher__icon"]}>
        <use href={new URL(`${iconsURL}#${icon}`, import.meta.url).href} />
      </svg>

      <span className={styles["theme-switcher__caption"]}>
        {nextTheme} Mode
      </span>
    </button>
  );
};

export default ThemeSwitcher;
