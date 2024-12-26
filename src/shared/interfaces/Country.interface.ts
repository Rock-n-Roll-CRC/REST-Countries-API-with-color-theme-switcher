export interface Country {
  cca3: string;
  tld?: string[];
  name: {
    common: string;
    nativeName?: Record<
      string,
      {
        common: string;
        official: string;
      }
    >;
    official: string;
  };
  languages: Record<string, string>;
  flags: {
    alt?: string;
    png: string;
    svg: string;
  };
  capital?: string[];
  population: number;
  region: string;
  subregion?: string;
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  borders: string[];
}
