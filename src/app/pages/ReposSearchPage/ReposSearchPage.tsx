import { FC, useEffect, useState } from 'react';

import { EXAMPLE_ORGANIZATION, gitHubStore } from '@app/App';
import SearchForm from '@app/components/FormSearch';
import GitRepoCard from '@app/components/Git-repo-card';
import RepositoryList from '@app/components/Repository-List';
import SearchButton from '@app/components/UI/Search-button';
import SearchInput from '@app/components/UI/Search-input';
import SearchIcon from '@app/components/UI/SearchIcon';
// import { WithSpinner } from '@app/components/WithSpinnerHOC/WithSpinnerHoc';
import { ApiResp, RepoItem } from '@store/GitHubStore/types';

import styles from './ReposSearchPage.module.css';

const ReposSearchPage: FC = () => {
  const [data, setData] = useState<ApiResp<RepoItem[]> | null>(null);
  const [isFetching, setIseFetching] = useState<boolean>(false);
  const [currentInputState, setcurrentInputState] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIseFetching(true);
        const data = await gitHubStore.getOrganizationReposList({
          org: EXAMPLE_ORGANIZATION,
        });
        setData(data);
        console.log(data);
        setIseFetching(false);
      } catch (error) {
        setIseFetching(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIseFetching(true);
    setTimeout(() => setIseFetching(false), 3000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setcurrentInputState(e.target.value);
  };

  const handleClickRepoCard = (e: React.MouseEvent<HTMLDivElement>): void => {
    console.log(e.target);
  };
  // const RepositoryListWithSpinner = WithSpinner(
  //   <RepositoryList data={data} handleClick={handleClickRepoCard} />
  // );
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

      <RepositoryList handleClick={handleClickRepoCard} data={data} />
    </div>
  );
};
export default ReposSearchPage;
