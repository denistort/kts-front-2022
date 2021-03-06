import  styles  from './Search-input.module.css';
import { SearchInputProps } from './types';

const SearchInput = ({ placeholder }: SearchInputProps) => {

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