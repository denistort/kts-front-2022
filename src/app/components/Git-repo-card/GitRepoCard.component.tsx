import { FC } from 'react';

import Avatar from '@app/components/UI/Avatar';

import StarIcon from '../UI/StarIcon';
import styles from './GitRepoCard.module.css';
import { GitRepoCardProps } from './types';
const GitRepoCard: FC<GitRepoCardProps> = ({
  title,
  orgLink,
  orgName,
  rating,
  date,
  onClick,
  imageUrl,
}) => {
  return (
    <div onClick={onClick} className={styles['git-repo-tile']}>
      {/* <div className={styles['git-repo-tile__avatar']}>
        <img src={random() ? img : img2} alt="avatar" />
      </div> */}
      <Avatar
        src={imageUrl}
        cssClass={styles['git-repo-tile__avatar']}
        letter={orgName[0]}
      />

      <div className={styles['git-repo-tile__body-wraper']}>
        <h5 className={styles['git-repo-tile__title']}>{title}</h5>
        <p>
          <a className={styles['git-repo-tile__org-link']} href={orgLink}>
            {orgName}
          </a>
        </p>
        <div className={styles['git-repo-tile__footer-repos']}>
          <div className={styles['footer-repos__rating']}>
            <StarIcon сlassCss={styles['rating__star-logo']} />
            <span className={styles['rating__quantity']}>{rating}</span>
          </div>

          <div className={styles['footer-repos__date']}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default GitRepoCard;
