import React from "react"
import styled from "styled-components"

const LoaderWrapper = styled.div`
    width: 7rem;
    height: 7rem;
    background-color: var(--color-primary);
    border-radius: 100%;
    animation: focus 1s infinite ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes focus {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`

const Loader = () => {
    return <LoaderWrapper />
}

export default Loader
