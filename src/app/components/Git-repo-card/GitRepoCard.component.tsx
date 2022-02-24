import { FC } from 'react';
import React from 'react';

import Avatar from '@app/components/UI/Avatar';
import { parseDate } from '@utilz/parseDateForReposCards';

import StarIcon from '../UI/StarIcon';
import styles from './GitRepoCard.module.css';
import { GitRepoCardProps } from './types';

const GitRepoCard: FC<GitRepoCardProps> = ({
  title,
  orgName,
  rating,
  date,
  onClick,
  imageUrl,
}) => {
  return (
    <div onClick={onClick} className={styles['git-repo-tile']}>
      <Avatar
        src={imageUrl}
        cssClass={styles['git-repo-tile__avatar']}
        letter={orgName[0]}
      />

      <div className={styles['git-repo-tile__body-wraper']}>
        <h5 className={styles['git-repo-tile__title']}>{title}</h5>
        <p>
          <a className={styles['git-repo-tile__org-link']} href={'wwww'}>
            {orgName}
          </a>
        </p>
        <div className={styles['git-repo-tile__footer-repos']}>
          <div className={styles['footer-repos__rating']}>
            <StarIcon сlassCss={styles['rating__star-logo']} />
            <span className={styles['rating__quantity']}>{rating}</span>
          </div>

          <div className={styles['footer-repos__date']}>{parseDate(date)}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GitRepoCard);
