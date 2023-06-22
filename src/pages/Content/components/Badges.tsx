import React from 'react';
import { BadgeType } from '../../../interfaces';

function ArtistBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: 'none',
        display: 'block',
        height: '0.875em',
        aspectRatio: '1 / 1',
      }}
    >
      <g className="style-scope yt-icon">
        <path
          d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z"
          className="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{
        pointerEvents: 'none',
        display: 'block',
        height: '0.875em',
        aspectRatio: '1 / 1',
      }}
    >
      <g className="style-scope yt-icon">
        <path
          d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
          className="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
}

export default function Badge({ type }: { type: BadgeType }) {
  switch (type) {
    case BadgeType.ARTIST:
      return <ArtistBadge />;
    case BadgeType.VERIFIED:
      return <VerifiedBadge />;
    default:
      return null;
  }
}
