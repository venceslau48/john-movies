import React from "react"
import styled from "styled-components"
import Divider from "./Divider"

const StyledGenres = styled.div`
    display: flex;
    align-items: center;

    @media ${props => props.theme.bp.large} {
        flex-direction: column;
        align-items: flex-start;
    }

    @media ${props => props.theme.bp.medium} {
        flex-direction: row;
        align-items: center;
    }

    @media ${props => props.theme.bp.small} {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Genre = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-typo);
`

const Genres = ({ movie }) => {
    return (
        <StyledGenres>
            {movie.genres.map(genre => (
                <div key={genre.id}>
                    <Divider />
                    <Genre>{genre.name}</Genre>
                </div>
            ))}
        </StyledGenres>
    )
}

export default Genres
