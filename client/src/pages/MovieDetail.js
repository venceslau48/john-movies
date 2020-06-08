import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { Rate } from "antd"
import history from "../history"
import { useSelector, useDispatch } from "react-redux"
import { movieDetail, serieDetail } from "../actions/movieDetail"
import nocapa from "../images/nocapa.jpg"
import noimage from "../images/noimage.png"
import Genres from "../components/Genres"
import Cast from "../components/Cast"
import Divider from "../components/Divider"
import Rating from "../components/Rating"

const Container = styled.div`
    grid-column: center-start/center-end;

    @media ${props => props.theme.bp.smallest} {
        grid-column: 1/-1;
        grid-row: 1/-1;
        margin-top: 10rem;
    }
`

const BoxInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${props => props.theme.bp.smaller} {
        flex-direction: column;
        align-items: center;
    }
`

const Capa = styled.img`
    width: 35rem;
    height: 50rem;
    object-fit: cover;
    box-shadow: var(--shadow-light);
    border-radius: 1rem;
    transform: translateY(-12rem) translateX(2.5rem);

    @media ${props => props.theme.bp.large} {
        width: 28rem;
        height: 40rem;
    }

    @media ${props => props.theme.bp.small} {
        transform: translateY(4rem) translateX(0);
    }

    @media ${props => props.theme.bp.smaller} {
        width: 29rem;
        height: 41rem;
        margin-bottom: 6rem;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 4rem;
    margin-left: 8rem;

    @media ${props => props.theme.bp.small} {
        margin-left: 0;
        padding: 0 2rem;
    }
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1rem;

    @media ${props => props.theme.bp.small} {
        flex-direction: column;
    }
`

const Titulo = styled.h2`
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: -0.3px;
    color: var(--color-typo);
    margin-bottom: 0rem;
    flex: 1;
    line-height: 1.2;

    @media ${props => props.theme.bp.large} {
        font-size: 2.2rem;
        font-weight: 300;
        padding-right: 0.5rem;
    }

    @media ${props => props.theme.bp.small} {
        order: 2;
    }
`

const Back = styled.button`
    flex: 0 0 17%;
    background: var(--color-primary);
    color: white;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    font-weight: 500;
    box-shadow: var(--shadow-light);
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }

    @media ${props => props.theme.bp.small} {
        order: 1;
        margin-bottom: 3rem;
    }
`

const Resumo = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--color-typo);
    margin-bottom: 0;

    @media ${props => props.theme.bp.large} {
        font-size: 2rem;
    }
`

const SubInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0 0;
`

const SubInfo2 = styled(SubInfo)`
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

    /* @media ${props => props.theme.bp.smaller} {
        flex-direction: column;
        align-items: flex-start;
    } */
`

const Duracao = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-typo);
`

const Data = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-typo);
`

const Homepage = styled.a`
    color: var(--color-primary);
    transition: all 0.2s;
    margin-top: 2rem;

    &:hover {
        transform: translateY(-2px);
    }
`

const Descricao = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--color-typo);
    margin-top: 2rem;
`

const MovieDetail = props => {
    const _movie = useSelector(state => state.moviesReducer.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.match.params.categoria === "movie") {
            dispatch(movieDetail(props.match.params.id))
        }
        if (props.match.params.categoria === "serie") {
            dispatch(serieDetail(props.match.params.id))
        }
    }, [props.match.params.tipo])

    const Poster = styled.div`
        background-image: ${props =>
            props.temCapa ? `url(http://image.tmdb.org/t/p/original${_movie.backdrop_path})` : `url(${nocapa})`};
        filter: opacity(70%);
        box-shadow: var(--shadow-light);
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 0 0 1rem 1rem;
        height: 40vh;

        ${props =>
            !props.temCapa &&
            css`
                &:after {
                    content: "Photo by Georgia Vagim on Unsplash";
                    background-color: rgba(255, 255, 255, 0.7);
                    padding: 0.5rem 1rem;
                    border-radius: 1rem;
                    position: absolute;
                    bottom: 0.5rem;
                    right: 0.5rem;
                    color: var(--color-typo);
                    font-size: 1.2rem;
                }
            `}

            @media ${props => props.theme.bp.small} {
        display: none;
    }
    `

    return (
        <Container>
            <Poster temCapa={_movie.backdrop_path ? true : false} />
            <BoxInfo>
                <Capa src={_movie.poster_path ? `http://image.tmdb.org/t/p/w342${_movie.poster_path}` : noimage} />
                <Info>
                    <Head>
                        {_movie.title ? <Titulo>{_movie.title}</Titulo> : <Titulo>{_movie.original_name}</Titulo>}
                        <Back onClick={history.goBack}>Go Back</Back>
                    </Head>
                    <Resumo>{_movie.tagline}</Resumo>
                    <SubInfo>
                        <Rating movie={_movie} />
                    </SubInfo>
                    <SubInfo2>
                        {_movie.runtime && <Duracao>{_movie.runtime} min</Duracao>}
                        {_movie.number_of_seasons && <Duracao>{_movie.number_of_seasons} seasons</Duracao>}
                        <Divider />
                        {_movie.release_date && <Data>{_movie.release_date}</Data>}
                        {_movie.number_of_episodes && <Data>{_movie.number_of_episodes} episodes</Data>}
                        {_movie.genres && <Genres movie={_movie} />}
                    </SubInfo2>
                    <Homepage href={_movie.homepage} target="_blank">
                        Homepage
                    </Homepage>
                    <Descricao>{_movie.overview}</Descricao>
                </Info>
            </BoxInfo>
            {_movie.credits && <Cast movie={_movie} />}
        </Container>
    )
}

export default MovieDetail
