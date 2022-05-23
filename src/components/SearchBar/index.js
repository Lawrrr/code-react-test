import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

const SearchBar = () => {
  const [searchResults, setSearch] = useState('')

  let inputHandler = (e) => {
    let lowerCase = e.target.value
    setSearch(lowerCase);
  }

  return (
    <div>
      <Form.Control
        className="searchbar"
        type="text" 
        placeholder="Search..."
        size="sm"
        onChange={inputHandler}
      />
    </div>
  )
}

export default SearchBar