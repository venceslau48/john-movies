import React from "react"
import styled from "styled-components"
import profile from "../images/profile.png"

const StyledCast = styled.div`
    @media ${props => props.theme.bp.large} {
        margin-top: 4rem;
    }
`

const CastTitle = styled.h2`
    margin-bottom: 4rem;
    transform: translateX(2rem);
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: -0.3px;
    color: var(--color-typo);
    flex: 1;
    line-height: 1.2;
`

const CastListagem = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 2rem;

    @media ${props => props.theme.bp.smallest} {
        padding: 0 2rem;
    }
`

const CastItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

const CastFoto = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
`

const CastNome = styled.p`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-typo);
    margin-top: 2rem;
`

const Cast = ({ movie }) => {
    return (
        <StyledCast>
            <CastTitle>Cast</CastTitle>
            <CastListagem>
                {movie.credits.cast.map(credit => (
                    <CastItem key={credit.id}>
                        <CastFoto
                            src={credit.profile_path ? `http://image.tmdb.org/t/p/w342${credit.profile_path}` : profile}
                        />
                        <CastNome>{credit.name}</CastNome>
                    </CastItem>
                ))}
            </CastListagem>
        </StyledCast>
    )
}

export default Cast
