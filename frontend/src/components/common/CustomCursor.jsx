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
          background: isClicked ? '#ffffff' : isHovered ? '#ff8a80' : '#ffb4ac'
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
            ? 'rgba(255, 255, 255, 0.8)'
            : isHovered
            ? 'rgba(255, 138, 128, 0.6)'
            : 'rgba(255, 180, 172, 0.45)'
        }}
      />
    </>
  );
}
