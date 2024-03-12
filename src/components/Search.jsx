import React from 'react'

const Search = (props) => {
  return (
    <div>
        <input type="text" 
        value={props.value}
        onChange={(e)=> props.setSearchValue(e.target.value)}
        placeholder='search Here'/>
    </div>
  )
}

export default Search