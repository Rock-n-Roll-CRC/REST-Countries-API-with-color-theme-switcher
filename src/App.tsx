import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import LoadingSpinnerFullPage from "./components/LoadingSpinnerFullPage/LoadingSpinnerFullPage";
import Message404 from "./components/Message404/Message404";

import "./styles/main.scss";

const Homepage = lazy(() => import("./pages/Homepage"));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="*" element={<Message404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
