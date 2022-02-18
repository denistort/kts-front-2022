import { useState } from 'react';
import SearchForm from '@components/FormSearch/FormsSearch.component';
import GitRepoCard from '@components/Git-repo-card/GitRepoCard.component';
import SearchButton from '@components/UI/Search-button/Search-button.component';
import SearchInput from '@components/UI/Search-input/Search-input.component';
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