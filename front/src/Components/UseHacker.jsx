import { useState, useEffect} from 'react'
import axios from 'axios';

const useHackerNewsApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url)
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false)
    } 
    // fetchDataでfetchを忘れないように...
    fetchData();
    // 副作用は search に依存させる
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}

export default useHackerNewsApi