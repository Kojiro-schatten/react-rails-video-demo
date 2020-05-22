import React, { useState, useCallback } from 'react'
import { StyledShareView } from '../styles/Share/StyledShareView'
import { ShareProvider } from './ShareContext'
import AddShare from './AddShare'
import SelectShare from './SelectShare'
import Navigation from './Navigation'

const ShareView = () => {
  const [state, setState] = useState({
    tab: 'panel1',
  });

  const handleClick = useCallback((event) => {
    // イベント発生源の要素を取得
    const element = event.currentTarget;
    // aria-controls 属性の値を取得
    const tabState = element.getAttribute('aria-controls');
    setState({
      tab: tabState,
    });
  }, []);
  return (
    <StyledShareView>
      <ul role="tablist">
        <li role="presentation">
          <button role="tab"
                  aria-controls="panel1"
                  aria-selected={state.tab === 'panel1'}
                  onClick={handleClick}>
            Select
          </button>
        </li>
        <li role="presentation">
          <button role="tab"
                  aria-controls="panel2"
                  aria-selected={state.tab === 'panel2'}
                  onClick={handleClick}>
            Shared
          </button>
        </li>
      </ul>
      
      <ShareProvider>
      <div role="tabpanel"
           id="panel1"
           aria-hidden={state.tab !== 'panel1'}>
        <AddShare />

      </div>

      <div role="tabpanel"
           id="panel2"
           aria-hidden={state.tab !== 'panel2'}>
        <Navigation />
        <SelectShare />
      </div>
      </ShareProvider>
    </StyledShareView>
  ) 
} 

export default ShareView