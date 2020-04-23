/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Frame from "../Shapes/Frame"

export default function AboutSlide({children}) {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          width: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: -25%;
            left: -50%;
            z-index: 10;
          `}
        >
          <Frame css={css`transform:scale(0.6);`} />
        </div>
        <div
          css={css`
            position: relative;
            z-index: 420;
          `}
        >
          <div css={css`
            width:4em;
            height:4em;
            overflow:hidden;
            border-radius:1em;
          `}>
            <img
              src="https://pbs.twimg.com/profile_images/1069417396400644096/1HiN2N-r_x96.jpg"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </div>
      <div
        css={css`
          width: 50%;
          position: relative;
          z-index: 710;
        `}
      >
        {children}
      </div>
    </div>
  );
}
