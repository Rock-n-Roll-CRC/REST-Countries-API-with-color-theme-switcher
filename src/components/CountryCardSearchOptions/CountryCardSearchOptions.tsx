import { type ReactNode } from "react";

import styles from "./CountryCardSearchOptions.module.scss";

const CountryCardSearchOptions = ({ children }: { children: ReactNode }) => (
  <div className={styles["country-card-search-options"]}>{children}</div>
);

export default CountryCardSearchOptions;
