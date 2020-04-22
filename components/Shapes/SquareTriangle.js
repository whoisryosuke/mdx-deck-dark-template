import React from "react";

export default function SquareTriangle({...props}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="488"
            height="802"
            fill="none"
            viewBox="0 0 488 802"
            {...props}
        >
            <g filter="url(#filter0_d)">
                <circle cx="-45" cy="350" r="306" fill="url(#paint0_radial)"></circle>
            </g>
            <g filter="url(#filter1_d)">
                <path
                    fill="url(#paint1_radial)"
                    d="M281.52 434.951l-91.985 242.343L25.652 476.461l255.868-41.51z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_d"
                    width="780"
                    height="780"
                    x="-395"
                    y="0"
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
                <filter
                    id="filter1_d"
                    width="589.138"
                    height="589.138"
                    x="-89"
                    y="275"
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
                    gradientTransform="matrix(414.08964 551.205 -704.70047 529.40225 -167.299 162.887)"
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
                    gradientTransform="rotate(122.118 20.023 254.168) scale(341.3)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00A0FE"></stop>
                    <stop offset="1" stopColor="#A000C4"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
}
