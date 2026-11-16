import React from 'react';
import { useCustomCursor } from '../../hooks/useCustomCursor';
import { useTheme } from '../../context/ThemeContext';

export default function CustomCursor() {
  const { position, ringPos, isHovered, isClicked, isVisible } = useCustomCursor();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!isVisible) return null;

  const dotBg = isLight
    ? (isClicked ? '#dd2d4a' : isHovered ? '#dd2d4a' : '#880d1e')
    : (isClicked ? '#cbeef3' : isHovered ? '#dd2d4a' : '#f26a8d');

  const ringBorder = isLight
    ? (isClicked ? 'rgba(221, 45, 74, 0.95)' : isHovered ? 'rgba(221, 45, 74, 0.8)' : 'rgba(136, 13, 30, 0.45)')
    : (isClicked ? 'rgba(203, 238, 243, 0.9)' : isHovered ? 'rgba(221, 45, 74, 0.75)' : 'rgba(244, 156, 187, 0.5)');

  return (
    <>
      <div
        id="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isClicked ? '4px' : isHovered ? '10px' : '6px',
          height: isClicked ? '4px' : isHovered ? '10px' : '6px',
          background: dotBg
        }}
      />
      <div
        id="cursor-ring"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isClicked ? '20px' : isHovered ? '52px' : '32px',
          height: isClicked ? '20px' : isHovered ? '52px' : '32px',
          borderColor: ringBorder
        }}
      />
    </>
  );
}
