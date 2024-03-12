import React from 'react'

function SearchBar({onChange, value}) {
  
  return (
    <div className='container-fluid d-flex'>
      <input 
        type="text" 
        placeholder='Search a movie...' 
        className='text-center py-1 w-100'
        value={value}
        onChange={onChange}
    />
    <button className='btn btn-dark rounded-0'>
      Search
    </button>
    </div>

    
        
  )
}

export default SearchBar