import { Link } from "react-router-dom";

import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./Message404.module.scss";

const Message404 = () => {
  return (
    <div className={styles.message404}>
      <div className={styles.message404__body}>
        <h1 className={styles.message404__heading}>404</h1>

        <p className={styles.message404__description}>
          Sorry, we couldn&apos;t find this page. But don&apos;t worry, you can
          find plenty of other things on our homepage!
        </p>

        <Link to="/">
          <button className={styles.message404__button}>Go to Homepage</button>
        </Link>
      </div>

      <svg className={styles.message404__icon}>
        <use href={new URL(`${iconsURL}#earth`, import.meta.url).href} />
      </svg>
    </div>
  );
};

export default Message404;
