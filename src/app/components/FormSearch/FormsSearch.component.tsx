import styles from './FormSearch.module.css'
import { FC } from "react";
import { SearchFormProps } from './types';

const SearchForm: FC = ({ children }: SearchFormProps) => {

	return (
		<form className={styles['search-form']}>
			{children}
		</form>
	)
}
export default SearchForm;