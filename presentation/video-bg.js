import React, { Component } from 'react';
import SlideVideo from "./../assets/alchemy.mp4";
import VideoBg from 'react-video-cover';

class Background extends Component {

  state = {
    resizeNotifier: () => {},
  }

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
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
    );
  }
}

export default Background;