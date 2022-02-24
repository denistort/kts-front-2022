import { FC, useEffect, useState } from 'react';

import { EXAMPLE_ORGANIZATION, gitHubStore } from '@app/App';
import SearchForm from '@app/components/FormSearch';
import SearchButton from '@app/components/UI/Search-button';
import SearchInput from '@app/components/UI/Search-input';
import SearchIcon from '@app/components/UI/SearchIcon';
import { ApiResp, RepoItem } from '@store/GitHubStore/types';

import RepositoryListWithSpinner from './components/RepositorylistWithSpinner';
import styles from './ReposSearchPage.module.css';

const ReposSearchPage: FC = () => {
  const [data, setData] = useState<ApiResp<RepoItem[]> | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [currentInputState, setcurrentInputState] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const data = await gitHubStore.getOrganizationReposList({
          org: EXAMPLE_ORGANIZATION,
        });
        setData(data);
      } catch (er) {
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setcurrentInputState(e.target.value);
  };

  const handleClickRepoCard = (e: React.MouseEvent<HTMLDivElement>): void => {};

  return (
    <div className={styles['list-of-repos']}>
      <SearchForm>
        <SearchInput
          placeholder="Введите название организации"
          value={currentInputState}
          disabled={isFetching}
          onChange={handleChange}
        />
        <SearchButton onClick={handleClick} disabled={isFetching}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>

      <RepositoryListWithSpinner
        isLoading={isFetching}
        handleClick={handleClickRepoCard}
        data={data}
      />
    </div>
  );
};
export default ReposSearchPage;
