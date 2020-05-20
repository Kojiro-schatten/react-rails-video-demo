  
import React, { useState } from 'react'
import { StyledSearchBar } from '../styles/Youtube/StyledSearchBar'

export const SearchBar = ({onSearchSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('React Conf')

    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.currentTarget.value)
    }
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        onSearchSubmit(searchTerm)
    }
    return (
      <StyledSearchBar>
        <div className="searchBar">
          <form className="searchForm" onSubmit={onFormSubmit}>
            <div className="field">
              <label>Video Search</label>
              <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler} />
            </div>
          </form>
        </div>
      </StyledSearchBar>
    );
}