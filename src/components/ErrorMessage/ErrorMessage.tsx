import { isRouteErrorResponse, Link } from "react-router-dom";

import Button from "../Button/Button";

import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ error }: { error: unknown }) => {
  if (!isRouteErrorResponse(error) || !(error instanceof Error)) return;

  const isPageNotFound = error.status === 404;

  return (
    <div className={styles["error-message"]}>
      <div className={styles["error-message__body"]}>
        <h1 className={styles["error-message__heading"]}>
          {isPageNotFound ? "404" : "Something went wrong"}
        </h1>

        <p className={styles["error-message__description"]}>
          {isPageNotFound
            ? "Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our homepage!"
            : error.message || error.data}
        </p>

        <Link to="/">
          <Button>Go to Homepage</Button>
        </Link>
      </div>

      <svg className={styles["error-message__icon"]}>
        <use href={new URL(`${iconsURL}#earth`, import.meta.url).href} />
      </svg>
    </div>
  );
};

export default ErrorMessage;
