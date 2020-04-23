/** @jsx jsx */
import React from 'react'
import { css, jsx } from "@emotion/core";


export default function EmotionTest() {
    return (
        <div css={css`color:red;`}>
            Emotion test
        </div>
    )
}
