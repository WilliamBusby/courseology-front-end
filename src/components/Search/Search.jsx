import React from 'react';
import "./Search.scss";

const Search = (props) => {

  const {searchFunction} = props;

  return (
    <div className="search-box">
      <input type="text" onchange={searchFunction} />  
    </div>
  )
}

export default Search