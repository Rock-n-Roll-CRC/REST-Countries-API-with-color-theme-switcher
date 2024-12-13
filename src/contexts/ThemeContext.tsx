import { type ReactNode, createContext, useState, useEffect } from "react";

const initialValue = {
  theme: "light",
  nextTheme: "dark",
  icon: "moon-outline",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialValue);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(initialValue.theme);

  const nextTheme = theme === "light" ? "dark" : "light";
  const icon = theme === "light" ? "moon-outline" : "sunny-outline";

  function toggleTheme() {
    setTheme(nextTheme);
  }

  useEffect(() => {
    const storagedTheme = localStorage.getItem("theme");

    if (storagedTheme) setTheme(storagedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        nextTheme,
        icon,
        toggleTheme,
      }}
    >
      <div
        className={`theme--${theme}`}
        style={{
          display: "flex",
          flexDirection: "column",
          minBlockSize: "100vb",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
