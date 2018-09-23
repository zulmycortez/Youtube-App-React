import React from "react";
import VideoListItem from './video_list_item.js'; //importing videoListItem because we use it here
const VideoList = (props) => {
  console.log(props); //return from api with videos array
  //videoItems is a function that returns a hash map of the videos array returned by the api.  we call the hash VideoListItem and use it in in another file
  //map creates a new object that is made from importing the video-list-item (which is essentially a template) and using that template from the videos props returned in index.js so you get a new object withe values that are formmated videolistitems
  const videoItems = props.videos.map((video, index) => {
    return (
      //key isn't cumpulsory but you will get a warning if you don't use it because you should have an index for array that has unique ids
      <VideoListItem key={index} video={video} />
    )
  });
  return (
    <ul className="col-md-4 list-group">

      {videoItems}
    </ul>
  );
};
export default VideoList;
