import React from "react";
import { StyledVideoDetails } from "../styles/Youtube/StyledVideoDetails";
export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Waiting...</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <StyledVideoDetails>
      <div className="embed">
        <iframe width="100%" title={video.snippet.title} height="415" src={videoUrl} />
      </div>
      <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </StyledVideoDetails>
  );
};
