import React from "react";
import { StyledVideoItem } from '../styles/StyledVideoItem'
export const VideoItem = ({ video, index, setSelectedVideo }) => {


  return (
    <StyledVideoItem>
      <div className="videoItem" onClick={() => setSelectedVideo(video)}>
        <img alt="/front/public/images/thumnail.png" className="image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    </StyledVideoItem>
  );
};
