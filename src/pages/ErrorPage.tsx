import { useRouteError } from "react-router-dom";

import Main from "../components/Main/Main";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Main page="error">
      <ErrorMessage error={error} />
    </Main>
  );
};

export default ErrorPage;
