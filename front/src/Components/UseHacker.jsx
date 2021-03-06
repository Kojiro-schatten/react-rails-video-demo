import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import dataFetchReducer from "./useDataReducer";

const useHackerNewsApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    // fetchDataでfetchを忘れないように...
    fetchData();
    // 副作用は search に依存させる
  }, [url]);

  return [state, setUrl];
};

export default useHackerNewsApi;
