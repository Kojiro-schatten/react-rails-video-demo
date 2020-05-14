import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledApiRender } from './styles/StyledApiRender'
 
function ApiRender() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux')
  const [url, setUrl] = useState(
    'http://hn.algolia.com/api/v1/search?query=redux',   
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData(result.data);
    } 
    // fetchDataでfetchを忘れないように...
    fetchData();
    // 副作用は search に依存させる
  }, [url]);
 
  return (
    <StyledApiRender>
      <input 
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {/* 副作用はインプットフィールドで一文字入力するたびに更新される query state ではなく search state に依存させる */}
      <button 
        type="button" 
        onClick={() => 
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
      }>
        Search
      </button>
      <ul>
        {data.hits.map(item => (
          <li className="ApiRenderItem" key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </StyledApiRender>
  );
}
 
export default ApiRender;