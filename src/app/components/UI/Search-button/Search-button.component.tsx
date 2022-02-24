import React from 'react';
import { FC } from 'react';

import styles from './Search-button.module.css';
import { SearchButtonPros } from './types';

const SearchButton: FC<SearchButtonPros> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles['search-form__button']}
    >
      {children}
    </button>
  );
};

export default React.memo(SearchButton);
