import styles from './FormSearch.module.css'
interface ISearchForm {
	children: React.ReactNode,
}
const SearchForm = ({ children }: ISearchForm) => {

	return(
		<form className={styles['search-form']}>
			{children}
		</form>
	)
}
export default SearchForm;