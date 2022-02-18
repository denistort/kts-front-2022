import { useState } from 'react';
import SearchForm from '@app/components/FormSearch';
import GitRepoCard from '@app/components/Git-repo-card';
import SearchButton from '@app/components/UI/Search-button';
import SearchInput from '@app/components/UI/Search-input';
import { mimickData } from './MimickData';
import styles from './Repository-list.module.css';

const RepositoryList = () => {
	const [data] = useState(mimickData)
	return (
		<div className={styles['list-of-repos']}>
			<SearchForm>
				<SearchInput placeholder='Введите название организации' />
				<SearchButton />
			</SearchForm>

			<div className={styles['repos-container']}>
				{
					data.map(({ id, ...props }) => (
						<GitRepoCard
							key={id}
							{...props}
						/>
					))
				}
			</div>
		</div>
	)
}
export default RepositoryList;