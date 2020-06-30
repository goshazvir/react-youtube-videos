import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const {searcFormValue} = props;
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    };

    const onFormSubmit = event => {
        event.preventDefault();
        searcFormValue(term)
    }

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input
                        type='text'
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

SearchBar.propTypes = {
    searcFormValue: PropTypes.func,
}

export default SearchBar;