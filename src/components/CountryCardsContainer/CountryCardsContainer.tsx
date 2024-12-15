import { type ReactNode } from "react";

import styles from "./CountryCardsContainer.module.scss";

const CountryCardsContainer = ({ children }: { children: ReactNode }) => (
  <div className={styles["country-cards-container"]}>{children}</div>
);

export default CountryCardsContainer;
