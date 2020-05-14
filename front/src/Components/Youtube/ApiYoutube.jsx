import React, { useState, useEffect } from 'react'
import config from './config.js'
import numeral from 'numeral'

// const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const YoutubeCounter = () => {
  const [subscribeCount, setSubscriberCount] = useState();

  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`
    fetch(apiCall)
      .then(result => result.json())
      .then(data => {
        // numeralの表記設定 http://numeraljs.com/
        const count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
        setSubscriberCount(count);
      })
  });
  return(
    <div>
      <h2>React Conf has {subscribeCount} subscribers!</h2>
      <div>From here, you can watch any videos created by React Conf</div>
    </div>
  ) 
}

export default YoutubeCounter;