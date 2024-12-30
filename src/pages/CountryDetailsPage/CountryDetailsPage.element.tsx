import { Link, useLoaderData, useNavigation } from "react-router-dom";

import { type Country } from "../../shared/interfaces/Country.interface";

import LoadingPage from "../LoadingPage";
import Header from "../../components/Header/Header";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import Main from "../../components/Main/Main";
import Button from "../../components/Button/Button";
import CountryDetails from "../../components/CountryDetails/CountryDetails";

const CountryDetailsPage = () => {
  const navigation = useNavigation();
  const { country, borderCountries } = useLoaderData() as {
    country: Country;
    borderCountries: Country[];
  };

  return navigation.state === "loading" ? (
    <LoadingPage />
  ) : (
    <>
      <Header>
        <ThemeSwitcher />
      </Header>

      <Main page="country-details">
        <Link to={"/"}>
          <Button icon="arrow-back-outline">Back</Button>
        </Link>

        <CountryDetails country={country} borderCountries={borderCountries} />
      </Main>
    </>
  );
};

export default CountryDetailsPage;
