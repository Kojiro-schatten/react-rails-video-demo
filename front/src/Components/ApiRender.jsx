import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledApiRender } from './styles/StyledApiRender'
import Spinner from 'react-spinner-material'
 
function ApiRender() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux')
  const [url, setUrl] = useState(
    'http://hn.algolia.com/api/v1/search?query=redux',   
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);

      setData(result.data);
      setIsLoading(false)
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