import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      origin: 'https://www.youtube.com/',
      key: 'AIzaSyBtQsDOoZD_fG_JSL8o44Nmx5w8ohicWt4',
    },
  };

  const videoIds = [
    'Yc-7IQqcqeM',
  ];

  const onReady = (event) => {

  };

  return (
    <div className='api'>
      {videoIds.map((videoId, index) => (
        <YouTube
          key={index}
          videoId={videoId}
          opts={opts}
          onReady={onReady}
        />
      ))}
    </div>
  );
};

export default YoutubePlayer;