import React from 'react';

export default function ChapterLabel({ chapter, title, className = '', rotate = '-1.5deg' }) {
  return (
    <div 
      className={`chapter-badge ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#FFFFFF', borderRadius: '50%' }}></span>
      <span>{chapter ? `${chapter} : ${title}` : title}</span>
    </div>
  );
}
