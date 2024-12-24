import { useState } from "react";

import iconsURL from "../../assets/icons.svg?no-inline";

import styles from "./Select.module.scss";

interface SelectOption {
  label: string;
  value: string;
}

const Select = ({
  value,
  onChange,
  placeholder,
  children: options,
}: {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  children: SelectOption[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const icon = isOpen
    ? "chevron-down-outline"
    : value
      ? "close-outline"
      : "chevron-up-outline";

  function handleToggleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleSelectOption(option: SelectOption | undefined) {
    onChange(option?.value ?? "");
    setIsOpen(false);
  }

  return (
    <div className={styles.select} onClick={handleToggleIsOpen}>
      <span className={styles.select__value}>
        {options.find((option) => option.value === value)?.label ?? placeholder}
      </span>

      {value && !isOpen ? (
        <svg
          className={`${styles.select__icon ?? ""} ${styles["select__icon--close"] ?? ""}`}
          onClick={(event) => {
            event.stopPropagation();

            handleSelectOption(undefined);
          }}
        >
          <use href={new URL(`${iconsURL}#${icon}`, import.meta.url).href} />
        </svg>
      ) : (
        <svg className={styles.select__icon}>
          <use href={new URL(`${iconsURL}#${icon}`, import.meta.url).href} />
        </svg>
      )}

      {isOpen && (
        <ul className={styles["select__option-list"]}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.select__option}
              onClick={(event) => {
                event.stopPropagation();

                handleSelectOption(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
