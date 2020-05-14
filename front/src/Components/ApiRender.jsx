import React, { useState } from 'react';
import { StyledApiRender } from './styles/StyledApiRender'
import Spinner from 'react-spinner-material'
import useHackerNewsApi from './UseHacker'

function ApiRender() {
  const [query, setQuery] = useState('redux')
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi(
    'http://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );
 
  return (
    <StyledApiRender>
      <form onSubmit={event => {
        doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        event.preventDefault();
      }}>
        <input 
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          />
        {/* 副作用はインプットフィールドで一文字入力するたびに更新される query state ではなく search state に依存させる */}
        <button type="submit">Search</button>
      </form>

      {isError && <div>ERROR!</div>}
      {isLoading ? (
      <div style={{
        textAlign: "center",
        position: "relative",
        left: "45%"
      }}>
        <Spinner radius={60} color={"#333"} stroke={2} visible={true} />
      </div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li className="ApiRenderItem" key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </StyledApiRender>
  );
}
 
export default ApiRender;