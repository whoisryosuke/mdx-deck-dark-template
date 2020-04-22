import React from "react"
import SquareTriangle from "../Shapes/SquareTriangle"

export default function LeftShape({children}) {
    return (
        <div style={{position:"relative"}}>
            <SquareTriangle
                style={{
                    position: 'absolute',
                    top: '-3.5em',
                    left: '-4.5em',
                    zIndex: "10"
                }} />
            <main style={{ position: "relative",zIndex: "420"}}>
                {children}
            </main>
        </div>
    )
}
