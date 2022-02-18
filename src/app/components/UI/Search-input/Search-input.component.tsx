import { FC } from 'react';

import styles from './Search-input.module.css';
import { SearchInputProps } from './types';

const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={styles['search-form__input']}
      type="search"
      name="search-input"
    />
  );
};

export default SearchInput;
