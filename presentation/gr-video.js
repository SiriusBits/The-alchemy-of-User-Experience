import React, { Component } from 'react';
import SlideVideo from "./../assets/nature-by-numbers.mp4";
import Video from 'react-video-cover';

class VideoPl extends Component {

  state = {
    resizeNotifier: () => {},
  }

  render() {

    const videoOptions = {
      src: SlideVideo,
      ref: videoRef => {
        this.videoRef = videoRef;
      },
      onClick: () => {
        if (this.videoRef && this.videoRef.paused) {
          this.videoRef.play();
        } else if (this.videoRef) {
          this.videoRef.pause();
        }
      },
      title: 'click to play/pause',
    };
    return (
        <Video
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

export default VideoPl;