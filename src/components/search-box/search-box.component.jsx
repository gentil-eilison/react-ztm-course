import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        return (
            <input 
            className={`search-box ${this.props.className}`}
            onChange={this.props.onChangeHandler}
            placeholder={this.props.placeholder}
            type="search" 
            />
        )
    }
}

export default SearchBox
