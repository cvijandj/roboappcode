import React from "react";
import 'tachyons';

const SearchBox = ({searchField, searchChange}) => {
    return(<div className="pa2">
        <input 
        className="pa3 ba1 br4 b--green bg-lightest-blue"
        type = 'search' 
        placeholder="search Robots" 
        onChange={searchChange}/>
        </div>
    )
}
export default SearchBox;