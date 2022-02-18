import React, { useEffect, useState } from 'react';

import SearchForm from '@app/components/FormSearch';
import GitRepoCard from '@app/components/Git-repo-card';
import SearchButton from '@app/components/UI/Search-button';
import SearchInput from '@app/components/UI/Search-input';
import SearchIcon from '@app/components/UI/SearchIcon';

import { mimickData } from './MimickData';
import styles from './Repository-list.module.css';
import { GitReposListState } from './types';

const RepositoryList = () => {
  const [data] = useState(mimickData);
  const [ReposListState, setReposListState] = useState<GitReposListState>({
    currentInputState: '',
    isLoading: false,
    data: null,
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setReposListState({ ...ReposListState, isLoading: true });
    setTimeout(
      () => setReposListState({ ...ReposListState, isLoading: false }),
      3000
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setReposListState({ ...ReposListState, currentInputState: e.target.value });
  };

  const handleClickRepoCard = (e: React.MouseEvent<HTMLDivElement>): void => {
    console.log(e.target);
  };
  return (
    <div className={styles['list-of-repos']}>
      <SearchForm>
        <SearchInput
          placeholder="Введите название организации"
          value={ReposListState.currentInputState}
          disabled={ReposListState.isLoading}
          onChange={handleChange}
        />
        <SearchButton onClick={handleClick} disabled={ReposListState.isLoading}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>

      <div className={styles['repos-container']}>
        {data.map(({ id, ...props }) => (
          <GitRepoCard onClick={handleClickRepoCard} key={id} {...props} />
        ))}
      </div>
    </div>
  );
};
export default RepositoryList;
