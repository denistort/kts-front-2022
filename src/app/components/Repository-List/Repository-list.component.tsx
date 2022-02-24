import { FC } from 'react';

import GitRepoCard from '@app/components/Git-repo-card';

import styles from './Repository-list.module.css';
import { ReposListProps } from './types';

const RepositoryList: FC<ReposListProps> = ({ handleClick, data }) => {
  return (
    <div className={styles['repos-container']}>
      {data
        ? data.map(({ id, ...props }) => (
            <GitRepoCard
              onClick={handleClick}
              key={id}
              title={props.name}
              rating={props.stargazers_count}
              date={props.updated_at}
              orgName={props.owner.login}
              imageUrl={props.owner.avatar_url}
            />
          ))
        : null}
    </div>
  );
};
export default RepositoryList;
