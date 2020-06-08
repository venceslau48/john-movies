import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Rate } from "antd"

const MainWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 1rem;
    transition: all 0.6s;
    background: white;
    box-shadow: var(--shadow-light);

    &:hover {
        transform: scale(1.03);
        opacity: 0.8;

        ::after {
            transform: scaleY(1);
            opacity: 1;
        }
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.8rem;
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
        background-color: var(--color-primary);
        z-index: -99;
        transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
`

const Capa = styled.img`
    width: 100%;
    height: 38rem;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 0 0 1rem 1rem;
    transition: all 0.4s linear;

    ${MainWrapper}:hover & {
        background: var(--color-primary);
    }
`

const NomeFilme = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-typo);
    margin-bottom: 0.5rem;
    transition: all 0.4s linear;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    ${MainWrapper}:hover & {
        color: white;
    }
`

const ContainerRating = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    color: var(--color-primary);
`

const StarsWrapper = styled(Rate)`
    line-height: 1;
    position: relative;

    ${MainWrapper}:hover & {
        .ant-rate-star.ant-rate-star-full {
            .anticon.anticon-star {
                color: yellow;
            }
        }

        .ant-rate-star-first {
            color: yellow;
        }
    }

    .ant-rate-star.ant-rate-star-full {
        .anticon.anticon-star {
            font-size: 14px;
            color: var(--color-primary);
            transition: all 0.6s linear;
        }
    }

    .anticon.anticon-star {
        font-size: 14px;
    }

    .ant-rate-star-first {
        color: var(--color-primary);
    }
`

const Movie = ({ movie, categoria }) => {
    return (
        <MainWrapper to={`/details/${categoria}/${movie.id}`}>
            <Capa
                src={
                    movie.poster_path
                        ? `http://image.tmdb.org/t/p/w342${movie.poster_path}`
                        : require("../images/noimage.png")
                }
            />
            <ContainerInfo>
                <NomeFilme title={movie.title}>{movie.title}</NomeFilme>
                <ContainerRating>
                    <StarsWrapper disabled value={movie.vote_average / 2} />
                </ContainerRating>
            </ContainerInfo>
        </MainWrapper>
    )
}

export default Movie
