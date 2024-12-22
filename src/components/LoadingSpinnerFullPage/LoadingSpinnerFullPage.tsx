import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import styles from "./LoadingSpinnerFullPage.module.scss";

const LoadingSpinnerFullPage = () => {
  return (
    <div className={styles["loading-spinner-full-page"]}>
      <LoadingSpinner size="fullpage" />
    </div>
  );
};

export default LoadingSpinnerFullPage;
