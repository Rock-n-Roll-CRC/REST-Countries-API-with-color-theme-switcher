import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import type { Country } from "../shared/interfaces/Country.interface";

import Header from "../components/Header/Header";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import Main from "../components/Main/Main";
import Button from "../components/Button/Button";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import CountryDetails from "../components/CountryDetails/CountryDetails";

const CountryDetailsPage = () => {
  const { countryCCA3 } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState<Country>();
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);

  useEffect(() => {
    void (async () => {
      try {
        if (!countryCCA3)
          throw new Error(
            "Failed to fetch the country. countryCCA3 parameter is unspecified! 🚫",
          );

        setIsLoading(true);

        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCCA3}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`,
        );

        if (!response.ok)
          throw new Error("Failed to fetch the country. Try again later! 🚫");

        const country = (await response.json()) as Country;

        setCountry(country);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [countryCCA3]);

  useEffect(() => {
    void (async () => {
      if (!country?.borders || country.borders.length === 0) return;

      try {
        setIsLoading(true);

        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}&fields=cca3,name`,
        );

        if (!response.ok)
          throw new Error(
            "Failed to fetch the border countries' names. Try again later! 🚫",
          );

        const borderCountries = (await response.json()) as Country[];

        setBorderCountries(borderCountries);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [country?.borders]);

  return (
    <>
      <Header>
        <ThemeSwitcher />
      </Header>

      <Main page="country-details">
        <Link to={"/"}>
          <Button icon="arrow-back-outline">Back</Button>
        </Link>

        {isLoading ? (
          <LoadingSpinner align="center" />
        ) : (
          country && (
            <CountryDetails
              country={country}
              borderCountries={borderCountries}
            />
          )
        )}
      </Main>
    </>
  );
};

export default CountryDetailsPage;
