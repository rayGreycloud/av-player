import React from 'react';

import PlaylistItem from '../PlaylistItem';
import withLink from '../../withLink';

import StyledPlaylistItems from './StyledPlaylistItems';

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map(video => (
      <PlaylistItemWithLink
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default PlaylistItems;
