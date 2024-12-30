import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import LoadingPage from "./pages/LoadingPage";

import { loader as homepageLoader } from "./pages/Homepage/Homepage.loader";
import { loader as countryDetailsPageLoader } from "./pages/CountryDetailsPage/CountryDetailsPage.loader";

import "./styles/main.scss";

const Homepage = lazy(() => import("./pages/Homepage/Homepage.element"));
const CountryDetailsPage = lazy(
  () => import("./pages/CountryDetailsPage/CountryDetailsPage.element"),
);
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    index: true,
    element: <Homepage />,
    loader: homepageLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:countryCCA3",
    element: <CountryDetailsPage />,
    loader: countryDetailsPageLoader,
    errorElement: <ErrorPage />,
  },
]);

const App = () => (
  <ThemeProvider>
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  </ThemeProvider>
);

export default App;
