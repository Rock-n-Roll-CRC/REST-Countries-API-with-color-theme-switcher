export interface Country {
  cca3: string;
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
  flags: {
    alt?: string;
    png: string;
    svg: string;
  };
  capital?: string[];
  population: number;
  region: string;
}
