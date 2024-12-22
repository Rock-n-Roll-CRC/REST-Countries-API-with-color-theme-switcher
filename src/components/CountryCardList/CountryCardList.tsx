import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { type Country } from "../../shared/interfaces/Country.interface";

import CountryCard from "../CountryCard/CountryCard";

import styles from "./CountryCardList.module.scss";

const CountryCardList = ({
  searchedCountryName,
  searchedCountryRegion,
}: {
  searchedCountryName?: string | null;
  searchedCountryRegion?: string | null;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const filteredCountries = countries.filter((country) => {
    const commonName = country.name.common.toLowerCase();
    const officialName = country.name.official.toLowerCase();
    const searchedName = searchedCountryName?.toLowerCase();
    const region = country.region.toLowerCase();
    const searchedRegion = searchedCountryRegion?.toLowerCase();

    if (searchedName && searchedRegion) {
      return (
        region === searchedRegion &&
        (commonName.includes(searchedName) ||
          officialName.includes(searchedName))
      );
    }

    if (!searchedName && searchedRegion) {
      return region === searchedRegion;
    }

    if (searchedName && !searchedRegion) {
      return (
        commonName.includes(searchedName) || officialName.includes(searchedName)
      );
    }

    return true;
  });

  useEffect(() => {
    void (async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,population,region",
        );

        if (!response.ok)
          throw new Error("Failed to fetch countries. Try again later! 🚫");

        const countries = (await response.json()) as Country[];

        setCountries(countries);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <ul className={styles["country-card-list"]}>
      {filteredCountries.map((country) => (
        <li key={country.cca3}>
          <Link to={country.cca3}>
            <CountryCard country={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryCardList;
