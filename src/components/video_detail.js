import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div><img src={'https://drive.google.com/open?id=12028S_15-D6VHf0qGl5Temek4iAswumV'} alt="Loading.." className="img-responsive"/></div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
    <div className="video-detail-inner">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div className="main_description">{video.snippet.description}</div>
      </div>
      </div>
    </div>
  )
}

export default VideoDetail;
