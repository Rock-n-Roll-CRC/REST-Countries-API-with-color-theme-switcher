import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import { type Country } from "../../shared/interfaces/Country.interface";

import CountryCard from "../CountryCard/CountryCard";

import styles from "./CountryCardList.module.scss";

const COUNTRIES_PER_PAGE = 10;

const CountryCardList = ({
  page,
  onMoveToNextPage,
  countries,
  searchedCountryName,
  searchedCountryRegion,
}: {
  page: number;
  onMoveToNextPage: () => void;
  countries: Country[];
  searchedCountryName?: string;
  searchedCountryRegion?: string;
}) => {
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

  const observerRef = useRef<IntersectionObserver>();
  const lastCountryCardRef = useCallback(
    (node: HTMLLIElement | null) => {
      observerRef.current?.disconnect();

      if (!node) return;

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          onMoveToNextPage();
        }
      });

      observerRef.current.observe(node);
    },
    [onMoveToNextPage],
  );

  return (
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
