import React, { useState, useEffect } from 'react'
import config from './config.js'
import numeral from 'numeral'
import { StyledApiYoutube } from '../styles/Youtube/StyledApiYoutube'
// keyとbaseURLの導入
import youtube, { KEY } from './youtube.js'
import { SearchBar } from './SearchBar.jsx'
import { VideoDetail } from './VideoDetail.js'
import { VideoList } from './VideoList.js'

const YoutubeCounter = () => {
  // 登録者の表示
  const [subscribeCount, setSubscriberCount] = useState();
  // 表示するビデオの取得
  const [videos, setVideos] = useState([])
  // APIと連携して選択したビデオのデータを取る
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResult: 10,
        key: KEY
      }
    })
    const responseArr = response.data.items;
    const firstVideo = responseArr[0].id.kind !== 'youtube#channel' ? responseArr[0] : responseArr[1]
    setVideos(responseArr)
    setSelectedVideo(firstVideo)
  }

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

  return KEY === '' ? <h1>You need to update your API key, read docs!</h1> :
  <StyledApiYoutube>
    <div className="ui">
      <div>
        <h2>React Conf has {subscribeCount} subscribers!</h2>
        <div>From here, you can watch any videos created by React Conf</div>
      </div>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className="grid">
        <div className="row">
          <div className="videoDetail">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="videoList">
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  </StyledApiYoutube>
}

export default YoutubeCounter;