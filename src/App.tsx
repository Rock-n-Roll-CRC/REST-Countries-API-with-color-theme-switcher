import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import LoadingPage from "./pages/LoadingPage";

import "./styles/main.scss";

const Homepage = lazy(() => import("./pages/Homepage"));
const CountryDetailsPage = lazy(() => import("./pages/CountryDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/:countryCCA3" element={<CountryDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
