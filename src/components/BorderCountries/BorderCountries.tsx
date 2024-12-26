import { Link } from "react-router-dom";

import type { Country } from "../../shared/interfaces/Country.interface";

import Button from "../Button/Button";

import styles from "./BorderCountries.module.scss";

const BorderCountries = ({
  borderCountries,
}: {
  borderCountries: Country[];
}) => {
  return (
    <div className={styles["border-countries"]}>
      <span className={styles["border-countries__heading"]}>
        Border Countries:
      </span>

      <ul className={styles["border-countries__button-list"]}>
        {borderCountries.map((borderCountry) => (
          <Link key={borderCountry.cca3} to={`/${borderCountry.cca3}`}>
            <Button size="small">{borderCountry.name.common}</Button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BorderCountries;
