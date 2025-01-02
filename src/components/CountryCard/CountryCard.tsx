import { type Country } from "../../shared/interfaces/Country.interface";

import styles from "./CountryCard.module.scss";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <article className={styles["country-card"]}>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className={styles["country-card__flag"]}
      />

      <div className={styles["country-card__body"]}>
        <h2 className={styles["country-card__name"]}>{country.name.common}</h2>

        <ul className={styles["country-card__description-list"]}>
          <li className={styles["country-card__description"]}>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString(navigator.language)}
          </li>

          <li className={styles["country-card__description"]}>
            <strong>Region:</strong> {country.region}
          </li>

          {country.capital && (
            <li className={styles["country-card__description"]}>
              <strong>Capital:</strong> {country.capital.join(", ")}
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

export default CountryCard;
