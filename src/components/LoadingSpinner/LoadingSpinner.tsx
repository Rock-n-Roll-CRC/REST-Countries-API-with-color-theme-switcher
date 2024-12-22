import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = ({ size }: { size?: "fullpage" }) => {
  return (
    <svg
      className={`${styles["loading-spinner"] ?? ""} ${(size && styles[`loading-spinner--${size}`]) ?? ""}`}
    >
      <use href={new URL(`${iconsURL}#3-dots-bounce`, import.meta.url).href} />
    </svg>
  );
};

export default LoadingSpinner;
