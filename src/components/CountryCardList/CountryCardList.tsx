import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import { type Country } from "../../shared/interfaces/Country.interface";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CountryCard from "../CountryCard/CountryCard";

import styles from "./CountryCardList.module.scss";

const COUNTRIES_PER_PAGE = 10;

const CountryCardList = ({
  page,
  onIncrementPage,
  searchedCountryName,
  searchedCountryRegion,
}: {
  page: number;
  onIncrementPage: () => void;
  searchedCountryName?: string | null;
  searchedCountryRegion?: string | null;
}) => {
  const [isLoading, setIsLoading] = useState(false);
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

  const shownCountries = filteredCountries.slice(0, page * COUNTRIES_PER_PAGE);

  const observer = useRef<IntersectionObserver>();
  const lastCountryRef = useCallback(
    (node: HTMLLIElement | null) => {
      observer.current?.disconnect();

      if (!node) return;

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          onIncrementPage();
        }
      });

      observer.current.observe(node);
    },
    [onIncrementPage],
  );

  useEffect(() => {
    void (async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,population,region",
        );

        if (!response.ok)
          throw new Error("Failed to fetch countries. Try again later! 🚫");

        const countries = (await response.json()) as Country[];

        setCountries(countries);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? (
    <LoadingSpinner position="centered" />
  ) : (
    <ul className={styles["country-card-list"]}>
      {shownCountries.map((country, index) =>
        index === shownCountries.length - 1 ? (
          <li key={country.cca3} ref={lastCountryRef}>
            <Link to={country.cca3}>
              <CountryCard country={country} />
            </Link>
          </li>
        ) : (
          <li key={country.cca3}>
            <Link to={country.cca3}>
              <CountryCard country={country} />
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default CountryCardList;
