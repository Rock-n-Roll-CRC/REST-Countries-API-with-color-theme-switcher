import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import Homepage from "./pages/Homepage";

import "./styles/main.scss";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* TODO: Implement code splitting */}
        <Routes>
          <Route index element={<Homepage />} />
          {/* TODO: Add a route for an unknown page */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
