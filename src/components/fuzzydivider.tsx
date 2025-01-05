import React from 'react';

const FuzzyDivider = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '2px', overflow: 'visible' }}>
      <div style={{ width: '100%', height: '2px', backgroundColor: '#333', filter: 'url(#fuzzyFilter)' }}></div>
      
      <svg width="0" height="0">
        <filter id="fuzzyFilter">
          {/* Adds noise for fuzziness */}
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          {/* Optional: Slight blur to make it softer */}
          <feGaussianBlur stdDeviation="0.3" />
        </filter>
      </svg>
    </div>
  );
};

export default FuzzyDivider;
