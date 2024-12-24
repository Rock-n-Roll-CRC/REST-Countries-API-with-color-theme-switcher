import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header/Header";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import Main from "../components/Main/Main";
import CountryCardsContainer from "../components/CountryCardsContainer/CountryCardsContainer";
import CountryCardSearchOptions from "../components/CountryCardSearchOptions/CountryCardSearchOptions";
import SearchInput from "../components/SearchInput/SearchInput";
import Select from "../components/Select/Select";
import CountryCardList from "../components/CountryCardList/CountryCardList";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedCountryName, setSearchedCountryName] = useState(
    searchParams.get("countryName") ?? "",
  );
  const [searchedCountryRegion, setSearchedCountryRegion] = useState(
    searchParams.get("countryRegion") ?? "",
  );

  function handleMoveToNextPage() {
    setPage((page) => page + 1);
  }

  function handleChangeSearchedCountryName(searchedCountryName: string) {
    setPage(1);
    setSearchedCountryName(searchedCountryName);
    searchParams.set("countryName", searchedCountryName);
    setSearchParams(searchParams);
  }

  function handleChangeSearchedCountryRegion(searchedCountryRegion: string) {
    setPage(1);
    setSearchedCountryRegion(searchedCountryRegion);
    searchParams.set("countryRegion", searchedCountryRegion);
    setSearchParams(searchParams);
  }

  return (
    <>
      <Header>
        <ThemeSwitcher />
      </Header>

      <Main>
        <CountryCardsContainer>
          <CountryCardSearchOptions>
            <SearchInput
              name="country"
              id="country"
              value={searchedCountryName}
              onChange={handleChangeSearchedCountryName}
              placeholder="Search for a country..."
            />

            <Select
              value={searchedCountryRegion}
              onChange={handleChangeSearchedCountryRegion}
              placeholder="Filter by Region"
            >
              {[
                { label: "Africa", value: "africa" },
                { label: "America", value: "americas" },
                { label: "Asia", value: "asia" },
                { label: "Europe", value: "europe" },
                { label: "Oceania", value: "oceania" },
              ]}
            </Select>
          </CountryCardSearchOptions>

          <CountryCardList
            page={page}
            onMoveToNextPage={handleMoveToNextPage}
            searchedCountryName={searchedCountryName}
            searchedCountryRegion={searchedCountryRegion}
          />
        </CountryCardsContainer>
      </Main>
    </>
  );
};

export default Homepage;
