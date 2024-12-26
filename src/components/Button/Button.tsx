import { type ReactNode } from "react";

import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./Button.module.scss";

const Button = ({
  icon,
  size,
  children,
}: {
  icon?: string;
  size?: "small";
  children: ReactNode;
}) => {
  return (
    <button
      className={`${styles.button ?? ""} ${(size && styles[`button--size-${size}`]) ?? ""}`}
    >
      {icon && (
        <svg className={styles.button__icon}>
          <use href={new URL(`${iconsURL}#${icon}`, import.meta.url).href} />
        </svg>
      )}

      <span className={styles.button__caption}>{children}</span>
    </button>
  );
};

export default Button;
