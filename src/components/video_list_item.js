import React, { Component } from 'react';
const VideoListItem = ({video}) => {
  const url = `https://i.ytimg.com/vi/${video.id.videoId}/default.jpg`;
  return (
    <li>
      <div className="embed-responsive">
        <img className="embed-responsive-item" src="{url}" />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </li>
  );
};
export default VideoListItem;
