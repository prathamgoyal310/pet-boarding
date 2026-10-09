import React from 'react';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export default function CustomCursor() {
  const { position, ringPos, isHovered, isClicked, isVisible } = useCustomCursor();

  if (!isVisible) return null;

  return (
    <>
      <div
        id="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isClicked ? '4px' : isHovered ? '10px' : '6px',
          height: isClicked ? '4px' : isHovered ? '10px' : '6px',
          background: isClicked ? '#f5e9e2' : isHovered ? '#773344' : '#e3b5a4'
        }}
      />
      <div
        id="cursor-ring"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isClicked ? '20px' : isHovered ? '52px' : '32px',
          height: isClicked ? '20px' : isHovered ? '52px' : '32px',
          borderColor: isClicked
            ? 'rgba(245, 233, 226, 0.85)'
            : isHovered
            ? 'rgba(119, 51, 68, 0.7)'
            : 'rgba(227, 181, 164, 0.45)'
        }}
      />
    </>
  );
}
