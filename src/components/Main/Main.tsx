import { type ReactNode } from "react";

import styles from "./Main.module.scss";

const Main = ({
  page,
  children,
}: {
  page?: "loading" | "not-found" | "country-details";
  children: ReactNode;
}) => (
  <main
    className={`${styles.main ?? ""} ${(page && styles[`main--page-${page}`]) ?? ""}`}
  >
    {children}
  </main>
);

export default Main;
