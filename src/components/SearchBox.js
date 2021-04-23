import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield, searchChange }) => {
    return (
        <div className= 'pa2'>
            <input 
             className="pa3 ba b--green bg-lightest-green"
             type='search' 
             placeholder='search robos' 
             onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;