import type { Country } from "../../shared/interfaces/Country.interface";

import BorderCountries from "../BorderCountries/BorderCountries";

import styles from "./CountryDetails.module.scss";

const CountryDetails = ({
  country,
  borderCountries,
}: {
  country: Country;
  borderCountries: Country[];
}) => {
  return (
    <div className={styles["country-details"]}>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className={styles["country-details__flag"]}
      />

      <div className={styles["country-details__body"]}>
        <h2 className={styles["country-details__name"]}>
          {country.name.common}
        </h2>

        <div className={styles["country-details__container"]}>
          <div
            className={styles["country-details__description-list-container"]}
          >
            <ul className={styles["country-details__description-list-1"]}>
              {country.name.nativeName && (
                <li className={styles["country-details__description"]}>
                  <strong>Native Name:</strong>{" "}
                  {Object.values(country.name.nativeName).at(-1)?.common}
                </li>
              )}

              <li className={styles["country-details__description"]}>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString(navigator.language)}
              </li>

              <li className={styles["country-details__description"]}>
                <strong>Region:</strong> {country.region}
              </li>

              {country.subregion && (
                <li className={styles["country-details__description"]}>
                  <strong>Sub Region:</strong> {country.subregion}
                </li>
              )}

              <li className={styles["country-details__description"]}>
                <strong>Capital:</strong> {country.capital}
              </li>
            </ul>

            <ul className={styles["country-details__description-list-2"]}>
              {country.tld && (
                <li className={styles["country-details__description"]}>
                  <strong>Top Level Domain:</strong> {country.tld.join(", ")}
                </li>
              )}

              <li className={styles["country-details__description"]}>
                <strong>Currencies:</strong>{" "}
                {Object.values(country.currencies).at(0)?.name}
              </li>

              <li className={styles["country-details__description"]}>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages).reverse().join(", ")}
              </li>
            </ul>
          </div>

          {country.borders.length !== 0 && (
            <BorderCountries borderCountries={borderCountries} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
