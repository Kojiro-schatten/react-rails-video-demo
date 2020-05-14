import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledApiRender } from './styles/StyledApiRender'
 
function ApiRender() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
 
    setData(result.data);
  }, []);
 
  return (
    <StyledApiRender>
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