import React from 'react';

import PlaylistHeader from './PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';

import StyledPlaylist from './StyledPlaylist';

const Playlist = props => (
  <StyledPlaylist>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;
