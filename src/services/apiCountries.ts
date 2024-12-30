import { type Country } from "../shared/interfaces/Country.interface";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (fields: string[]) => {
  const response = await fetch(`${API_URL}/all?fields=${fields.join(",")}`);

  if (!response.ok)
    throw new Error("Failed to fetch all countries. Try again later!");

  const countries = (await response.json()) as Country[];

  return countries;
};

export const getCountries = async (
  countriesCCA3: string[],
  fields: string[],
) => {
  const response = await fetch(
    `${API_URL}/alpha?codes=${countriesCCA3.join(",")}&fields=${fields.join(",")}`,
  );

  if (!response.ok)
    throw new Error("Failed to fetch the countries. Try again later!");

  const countries = (await response.json()) as Country[];

  return countries;
};

export const getCountry = async (countryCCA3: string, fields: string[]) => {
  const response = await fetch(
    `${API_URL}/alpha/${countryCCA3}?fields=${fields.join(",")}`,
  );

  if (!response.ok)
    throw new Error("Failed to fetch the country. Try again later!");

  const country = (await response.json()) as Country;

  return country;
};
