import React, { Component } from 'react';
import SlideVideo from "./../assets/alchemy.mp4";
import VideoBg from 'react-video-cover';

class Background extends Component {

  render() {
    const videoOptions = {
      src: SlideVideo,
      autoPlay: true,
      muted: true,
      loop: true,
    };

    return (
        <VideoBg
          videoOptions={videoOptions}
          remeasureOnWindowResize
        />
    );
  }
}

export default Background;