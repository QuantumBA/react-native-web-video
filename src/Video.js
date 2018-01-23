import { Component } from 'react';
import { ViewPropTypes, createElement } from 'react-native';

import { PropTypes } from 'prop-types';

type NormalProps = {
  /* Native only */
  source: Object,
  seek?: ?number,
  fullscreen?: ?boolean,
  controls?: ?boolean,
  onVideoLoadStart?: ?Function,
  onVideoLoad?: ?Function,
  onVideoBuffer?: ?Function,
  onVideoError?: ?Function,
  onVideoProgress?: ?Function,
  onVideoSeek?: ?Function,
  onVideoEnd?: ?Function,
  onTimedMetadata?: ?Function,
  onVideoFullscreenPlayerWillPresent?: ?Function,
  onVideoFullscreenPlayerDidPresent?: ?Function,
  onVideoFullscreenPlayerWillDismiss?: ?Function,
  onVideoFullscreenPlayerDidDismiss?: ?Function,
  onLoadStart?: ?Function,
  onLoad?: ?Function,
  onBuffer: ?Function,
  onError: ?Function,
  onProgress: ?Function,
  onSeek: ?Function,
  onEnd: ?Function,
  width?: ?number,
  heigth?: ?number,
  style: ?PropTypes.StyleSheet,


  // resizeMode: PropTypes.string,
  // poster: PropTypes.string,
  // repeat: PropTypes.bool,
  // paused: PropTypes.bool,
  // muted: PropTypes.bool,
  // volume: PropTypes.number,
  // rate: PropTypes.number,
  // playInBackground: PropTypes.bool,
  // playWhenInactive: PropTypes.bool,
  // ignoreSilentSwitch: PropTypes.oneOf(['ignore', 'obey']),
  // disableFocus: PropTypes.bool,
  // controls: PropTypes.bool,
  // currentTime: PropTypes.number,
  // progressUpdateInterval: PropTypes.number,
  // onFullscreenPlayerWillPresent: PropTypes.func,
  // onFullscreenPlayerDidPresent: PropTypes.func,
  // onFullscreenPlayerWillDismiss: PropTypes.func,
  // onFullscreenPlayerDidDismiss: PropTypes.func,
  // onReadyForDisplay: PropTypes.func,
  // onPlaybackStalled: PropTypes.func,
  // onPlaybackResume: PropTypes.func,
  // onPlaybackRateChange: PropTypes.func,
  // onAudioFocusChanged: PropTypes.func,
  // onAudioBecomingNoisy: PropTypes.func,
};

/* $FlowFixMe - the renderItem passed in from SectionList is optional there but
 * required here */
type Props = NormalProps;

class Video extends Component<Props> {

  setNativeProps(props: Object) {
    if (this._videoRef) {
      this._videoRef.setNativeProps(props);
    }
  }

  _assignRoot = (component) => {
    this._root = component;
  };

  _onLoadStart = (event) => {
    if (this.props.onLoadStart) {
      this.props.onLoadStart(event.nativeEvent);
    }
  };

  _onLoad = (event) => {
    if (this.props.onLoad) {
      this.props.onLoad(event.nativeEvent);
    }
  };

  _onError = (event) => {
    if (this.props.onError) {
      this.props.onError(event.nativeEvent);
    }
  };

  _onProgress = (event) => {
    if (this.props.onProgress) {
      this.props.onProgress(event.nativeEvent);
    }
  };

  _onSeek = (event) => {
    if (this.state.showPoster) {
      this.setState({ showPoster: false });
    }

    if (this.props.onSeek) {
      this.props.onSeek(event.nativeEvent);
    }
  };

  _onEnd = (event) => {
    if (this.props.onEnd) {
      this.props.onEnd(event.nativeEvent);
    }
  };

  _onTimedMetadata = (event) => {
    if (this.props.onTimedMetadata) {
      this.props.onTimedMetadata(event.nativeEvent);
    }
  };

  _onFullscreenPlayerWillPresent = (event) => {
    if (this.props.onFullscreenPlayerWillPresent) {
      this.props.onFullscreenPlayerWillPresent(event.nativeEvent);
    }
  };

  _onFullscreenPlayerDidPresent = (event) => {
    if (this.props.onFullscreenPlayerDidPresent) {
      this.props.onFullscreenPlayerDidPresent(event.nativeEvent);
    }
  };

  _onFullscreenPlayerWillDismiss = (event) => {
    if (this.props.onFullscreenPlayerWillDismiss) {
      this.props.onFullscreenPlayerWillDismiss(event.nativeEvent);
    }
  };

  _onFullscreenPlayerDidDismiss = (event) => {
    if (this.props.onFullscreenPlayerDidDismiss) {
      this.props.onFullscreenPlayerDidDismiss(event.nativeEvent);
    }
  };

  _onReadyForDisplay = (event) => {
    if (this.props.onReadyForDisplay) {
      this.props.onReadyForDisplay(event.nativeEvent);
    }
  };

  _onPlaybackStalled = (event) => {
    if (this.props.onPlaybackStalled) {
      this.props.onPlaybackStalled(event.nativeEvent);
    }
  };

  _onPlaybackResume = (event) => {
    if (this.props.onPlaybackResume) {
      this.props.onPlaybackResume(event.nativeEvent);
    }
  };

  _onPlaybackRateChange = (event) => {
    if (this.state.showPoster && (event.nativeEvent.playbackRate !== 0)) {
      this.setState({ showPoster: false });
    }

    if (this.props.onPlaybackRateChange) {
      this.props.onPlaybackRateChange(event.nativeEvent);
    }
  };

  _onAudioBecomingNoisy = () => {
    if (this.props.onAudioBecomingNoisy) {
      this.props.onAudioBecomingNoisy();
    }
  };

  _onAudioFocusChanged = (event) => {
    if (this.props.onAudioFocusChanged) {
      this.props.onAudioFocusChanged(event.nativeEvent);
    }
  };

  _onBuffer = (event) => {
    if (this.props.onBuffer) {
      this.props.onBuffer(event.nativeEvent);
    }
  };

  _captureRef = ref => {
    /* $FlowFixMe(>=0.53.0 site=react_native_fb,react_native_oss) This comment
     * suppresses an error when upgrading Flow's support for React. To see the
     * error delete this comment and run Flow. */
    this._videoRef = ref;
  };

  render() {
    const {
      source,
      volume,
      controls,
      style,
    } = this.props;

    return createElement('video', {
      src: source.uri || source,
      onLoadStart: this._onLoadStart,
      onLoadedData: this._onLoad,
      onError: this._onError,
      onProgress: this._onProgress,
      onSeeking: this._onSeek,
      onEnded: this._onEnd,
      onLoadedMetadata: this._onTimedMetadata,
      onCanPlay: this._onReadyForDisplay,
      onStalled: this._onPlaybackStalled,
      volume,
      controls,
      style,
    });
  }
}

Video.propTypes = {
  /* Native only */
  seek: PropTypes.number,
  fullscreen: PropTypes.bool,
  onVideoLoadStart: PropTypes.func,
  onVideoLoad: PropTypes.func,
  onVideoBuffer: PropTypes.func,
  onVideoError: PropTypes.func,
  onVideoProgress: PropTypes.func,
  onVideoSeek: PropTypes.func,
  onVideoEnd: PropTypes.func,
  onTimedMetadata: PropTypes.func,
  onVideoFullscreenPlayerWillPresent: PropTypes.func,
  onVideoFullscreenPlayerDidPresent: PropTypes.func,
  onVideoFullscreenPlayerWillDismiss: PropTypes.func,
  onVideoFullscreenPlayerDidDismiss: PropTypes.func,
  style: PropTypes.StyleSheet,

  /* Wrapper component */
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    // Opaque type returned by require('./video.mp4')
    PropTypes.number,
  ]),
  resizeMode: PropTypes.string,
  poster: PropTypes.string,
  repeat: PropTypes.bool,
  paused: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  rate: PropTypes.number,
  playInBackground: PropTypes.bool,
  playWhenInactive: PropTypes.bool,
  ignoreSilentSwitch: PropTypes.oneOf(['ignore', 'obey']),
  disableFocus: PropTypes.bool,
  controls: PropTypes.bool,
  currentTime: PropTypes.number,
  progressUpdateInterval: PropTypes.number,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  onBuffer: PropTypes.func,
  onError: PropTypes.func,
  onProgress: PropTypes.func,
  onSeek: PropTypes.func,
  onEnd: PropTypes.func,
  onFullscreenPlayerWillPresent: PropTypes.func,
  onFullscreenPlayerDidPresent: PropTypes.func,
  onFullscreenPlayerWillDismiss: PropTypes.func,
  onFullscreenPlayerDidDismiss: PropTypes.func,
  onReadyForDisplay: PropTypes.func,
  onPlaybackStalled: PropTypes.func,
  onPlaybackResume: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onAudioFocusChanged: PropTypes.func,
  onAudioBecomingNoisy: PropTypes.func,

  /* Required by react-native */
  scaleX: PropTypes.number,
  scaleY: PropTypes.number,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  rotation: PropTypes.number,
  ...ViewPropTypes,
};

export default Video;
