import { getAllCountries } from "../../services/apiCountries";

export const loader = () =>
  getAllCountries(["cca3", "name", "flags", "capital", "population", "region"]);
