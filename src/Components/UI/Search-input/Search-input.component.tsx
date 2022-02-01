import  React from "react";
import  styles  from './Search-input.module.css';

interface ISearchInput {
	placeholder: string;
}
const SearchInput = ({placeholder}: ISearchInput) => {

	return(
		<input 
			placeholder={placeholder} 
			className={styles['search-form__input']} 
			type="search" 
			name="search-form__input" 
		/>
	)
}

export default SearchInput;