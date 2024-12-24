import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = ({
  size,
  align,
}: {
  size?: "fullpage";
  align?: "center";
}) => {
  return (
    <svg
      className={`${styles["loading-spinner"] ?? ""} ${(size && styles[`loading-spinner--size-${size}`]) ?? ""} ${(align && styles[`loading-spinner--align-${align}`]) ?? ""}`}
    >
      <use href={new URL(`${iconsURL}#3-dots-bounce`, import.meta.url).href} />
    </svg>
  );
};

export default LoadingSpinner;
