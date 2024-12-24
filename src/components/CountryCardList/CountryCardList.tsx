import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import { type Country } from "../../shared/interfaces/Country.interface";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CountryCard from "../CountryCard/CountryCard";

import styles from "./CountryCardList.module.scss";

const COUNTRIES_PER_PAGE = 10;

const CountryCardList = ({
  page,
  onMoveToNextPage,
  searchedCountryName,
  searchedCountryRegion,
}: {
  page: number;
  onMoveToNextPage: () => void;
  searchedCountryName?: string;
  searchedCountryRegion?: string;
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
  const lastCountryCardRef = useCallback(
    (node: HTMLLIElement | null) => {
      observer.current?.disconnect();

      if (!node) return;

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          onMoveToNextPage();
        }
      });

      observer.current.observe(node);
    },
    [onMoveToNextPage],
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
    <LoadingSpinner align="center" />
  ) : (
    <ul className={styles["country-card-list"]}>
      {shownCountries.map((country, index) => (
        <li
          key={country.cca3}
          ref={
            index === shownCountries.length - 1 ? lastCountryCardRef : undefined
          }
        >
          <Link to={country.cca3}>
            <CountryCard country={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryCardList;
