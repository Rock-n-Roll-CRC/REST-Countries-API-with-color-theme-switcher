import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = ({
  size,
  position,
}: {
  size?: "fullpage";
  position?: "centered";
}) => {
  return (
    <svg
      className={`${styles["loading-spinner"] ?? ""} ${(size && styles[`loading-spinner--${size}`]) ?? ""} ${(position && styles[`loading-spinner--${position}`]) ?? ""}`}
    >
      <use href={new URL(`${iconsURL}#3-dots-bounce`, import.meta.url).href} />
    </svg>
  );
};

export default LoadingSpinner;
