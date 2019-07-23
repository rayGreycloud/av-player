import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Video from '../Video';
import Playlist from '../Playlist';
import StyledPlayer from './StyledPlayer';

const themeDark = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff'
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535'
};

const PlayerContainer = ({ match, location, history }) => {
  // move playlist data out of markup into separate file
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);

  // refactor into multiple hooks
  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false
  });

  // const videoPlaylist = videos.playlist;
  // const [activeVideo, setActiveVideo] = useState(videos.playlist[0]);
  // const [nightMode, setNightMode] = useState(true);
  // const { playlistId } = videos;
  // const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    console.log('test');

    const videoId = match.params.activeVideo;

    if (videoId !== undefined) {
      console.log('Not undefined');
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId
      );

      // setActiveVideo(videoPlaylist[newActiveVideo]);
      // setAutoplay(location.autoplay);
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }));
    } else {
      console.log('pushed!');
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos
    // activeVideo.id,
    // videoPlaylist
  ]);

  const nightModeCallback = () => {
    setState(prevState => ({ ...prevState, nightMode: !prevState.nightMode }));
  };

  const endCallback = () => {};

  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightMode ? themeDark : themeLight}>
      {state.videos !== null ? (
        <StyledPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default PlayerContainer;
