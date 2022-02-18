import { FC } from 'react';

import styles from './Avatar.module.css';
import { AvatarProps } from './types';
const Avatar: FC<AvatarProps> = ({ src, alt, letter, cssClass }) => {
  return (
    <div className={cssClass}>
      {src !== '' && src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className={styles['img-div']} role={'img'}>
          {letter}
        </div>
      )}
    </div>
  );
};

export default Avatar;
