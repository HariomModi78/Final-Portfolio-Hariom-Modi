import React from 'react';

export default function CornerStamps({ positions = ['top-left', 'bottom-right'] }) {
  return (
    <>
      {positions.includes('top-left') && (
        <div className="manga-corner-stamp stamp-top-left" aria-hidden="true"></div>
      )}
      {positions.includes('bottom-right') && (
        <div className="manga-corner-stamp stamp-bottom-right" aria-hidden="true"></div>
      )}
      {positions.includes('bottom-left') && (
        <div className="manga-corner-stamp stamp-bottom-left" aria-hidden="true"></div>
      )}
    </>
  );
}
