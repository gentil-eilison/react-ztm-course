import './search-box.styles.css';

const SearchBox = ({ className, onChangeHandler, placeholder }) => (
    <input 
    className={`search-box ${className}`}
    onChange={onChangeHandler}
    placeholder={placeholder}
    type="search" 
    />
)

export default SearchBox
