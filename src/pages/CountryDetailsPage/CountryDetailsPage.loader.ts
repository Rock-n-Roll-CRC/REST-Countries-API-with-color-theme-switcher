import { type Params } from "react-router-dom";

import { getCountry, getCountries } from "../../services/apiCountries";

export const loader = async ({ params }: { params: Params }) => {
  if (!params.countryCCA3)
    throw new Error(
      'Failed to fetch the country. ":/countryCCA3" param is unspecified!',
    );

  const country = await getCountry(params.countryCCA3, [
    "flags",
    "name",
    "population",
    "region",
    "subregion",
    "capital",
    "tld",
    "currencies",
    "languages",
    "borders",
  ]);

  const borderCountries =
    country.borders.length > 0
      ? await getCountries(country.borders, ["cca3", "name"])
      : [];

  return {
    country,
    borderCountries,
  };
};
