  
import React, { useState, useCallback } from 'react'
import { StyledSearchBar } from '../styles/StyledSearchBar'

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
    const [state, setState] = useState({
      tab: 'panel1',
    })
    const handleClick = useCallback((event) => {
      // イベント発生源の要素の取得
      const element = event.currentTarget;
      // aria-controls属性の値を取得
      const tabState = element.getAttribute('area-controls');
      setState({
        tab: tabState,
      });
    }, []);
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
        <div>
          <ul role="tablist">
            <li role="presentation">
              <button 
                role="tab" 
                aria-controls="panel1"
                aria-selected={state.tab === 'panel1'}
                onClick={handleClick}
              >
                カベルネ・ソーヴィニョン
              </button>
            </li>
            <li role="presentation">
              <button 
                role="tab" 
                aria-controls="panel2"
                aria-selected={state.tab === 'panel2'}
                onClick={handleClick}
                >
                カベルネ・ソーヴィニョン
              </button>
            </li>
            <li role="presentation">
              <button 
                role="tab" 
                aria-controls="panel3"
                aria-selected={state.tab === 'panel3'}
                onClick={handleClick}
                >
                カベルネ・ソーヴィニョン
              </button>
            </li>
          </ul>
          <div 
            role="tabpanel"
            id="panel1"
            aria-hidden={state.tab !== 'panel1'}
          >
              カベルネ・ソーヴィニョンはブドウの一品種。赤ワインの中でも渋くて重い味わいが特徴です。
          </div>
          <div 
            role="tabpanel"
            id="panel2"
            aria-hidden={state.tab !== 'panel2'}
          >
              this is panel2
          </div>
          <div 
            role="tabpanel"
            id="panel3"
            aria-hidden={state.tab !== 'panel3'}
          >
              this is panel 3
          </div>
        </div>
      </StyledSearchBar>
    );
}