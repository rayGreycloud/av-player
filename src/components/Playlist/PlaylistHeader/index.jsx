import React from 'react';

import StyledPlaylistHeader from './StyledPlaylistHeader';
import StyledJourney from './StyledJourney';

const PlaylistHeader = ({ active, total }) => (
  <StyledPlaylistHeader>
    <p>{active.title}</p>
    <StyledJourney>
      {active.num} / {total}
    </StyledJourney>
  </StyledPlaylistHeader>
);

export default PlaylistHeader;
