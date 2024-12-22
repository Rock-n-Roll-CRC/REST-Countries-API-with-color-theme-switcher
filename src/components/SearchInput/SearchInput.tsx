import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./SearchInput.module.scss";

const SearchInput = ({
  name,
  id,
  value,
  onChange,
  placeholder,
}: {
  name: string;
  id: string;
  value: string | null;
  onChange: (newValue: string) => void;
  placeholder?: string;
}) => {
  return (
    <div className={styles["search-input"]}>
      <svg className={styles["search-input__icon"]}>
        <use href={new URL(`${iconsURL}#search-sharp`, import.meta.url).href} />
      </svg>

      <input
        type="search"
        name={name}
        id={id}
        value={value ?? ""}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        placeholder={placeholder}
        autoComplete="off"
        className={styles["search-input__input"]}
      />
    </div>
  );
};

export default SearchInput;
