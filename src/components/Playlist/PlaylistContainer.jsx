import React from 'react';

import PlaylistHeader from './PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';

import StyledPlaylist from './StyledPlaylist';

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;
