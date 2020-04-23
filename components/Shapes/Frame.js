import React from "react";

function Frame({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1070"
      height="878"
      fill="none"
      viewBox="0 0 1070 878"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path fill="url(#paint0_radial)" d="M231 355H762V754H231z"></path>
      </g>
      <circle cx="274" cy="274" r="274" fill="url(#paint1_radial)"></circle>
      <path
        fill="url(#paint2_radial)"
        d="M878 126l166.28 288H711.723L878 126z"
      ></path>
      <defs>
        <filter
          id="filter0_d"
          width="699"
          height="567"
          x="187"
          y="311"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="40" dy="40"></feOffset>
          <feGaussianBlur stdDeviation="42"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.627451 0 0 0 0 0.996078 0 0 0 0.5 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(359.28395 359.36422 -478.35884 478.25198 390.388 432.51)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.297" stopColor="#6D59F0"></stop>
          <stop offset="1" stopColor="#00D2FF"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(71.333 87.327 89.322) scale(624.871)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FE"></stop>
          <stop offset="1" stopColor="#A000C4"></stop>
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(42.532 153.34 1123.751) scale(328.402)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D59F0"></stop>
          <stop offset="0.913" stopColor="#00D2FF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Frame;
