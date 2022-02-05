import styles from './FormSearch.module.css'
import {FC} from "react";
interface ISearchForm {
	children?: React.ReactNode,
}
const SearchForm: FC = ({ children }: ISearchForm) => {

	return(
		<form className={styles['search-form']}>
			{children}
		</form>
	)
}
export default SearchForm;