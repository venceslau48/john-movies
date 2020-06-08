import React, { useEffect, useState } from "react"
import styled from "styled-components"
import StickyBox from "react-sticky-box"
import { NavLink } from "react-router-dom"
import { Icon } from "antd"
import Logo from "./Logo"
import { ReactComponent as LogoAttribuition } from "../images/logo-attribuition.svg"

import { useSelector, useDispatch } from "react-redux"
import { genres } from "../actions/genres"

const NavbarMobile = styled.nav`
    display: none;

    @media ${props => props.theme.bp.smallest} {
        height: 8.5rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        background: var(--color-primary);
        z-index: 999;
    }
`

const Burger = styled.button`
    display: none;

    @media ${props => props.theme.bp.smallest} {
        display: block;
        position: absolute;
        top: 1.1rem;
        left: 1.1rem;
        font-size: 3.5rem;
        z-index: 9999;
        border: none;
        color: white;
        background: transparent;
        padding: 0.6rem 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: all 0.4s;
        outline: none;
    }
`

const MainWrapper = styled.div`
    grid-column: sidebar-start/sidebar-end;
    grid-row: 1/-1;

    @media ${props => props.theme.bp.smallest} {
        display: ${props => (props.mobile ? "none" : null)};
        grid-column: 1/3;
        z-index: 99;
        margin-top: 8.5rem;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 0 3rem;
    box-shadow: var(--shadow-light);
    height: 100%;
    min-height: 100vh;
    padding-bottom: 4rem;
`

const Titulo = styled.h2`
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: var(--color-typo);
    margin-top: 4rem;
`

const TipoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Tipo = styled(NavLink).attrs({ activeClassName: "active" })`
    font-size: 1.5rem;
    color: var(--color-typo-dark);
    display: block;
    width: 100%;
    padding: 0.4rem 1rem;

    &.active {
        color: var(--color-primary);
    }

    &:not(:first-child) {
        margin-top: 1rem;
    }
`

const TipoIcon = styled(Icon)`
    margin-right: 10px;
`

const LogoMovieDB = styled(LogoAttribuition)`
    width: 100%;
    height: 7rem;
    object-fit: contain;
    margin-top: 6rem;

    path {
        fill: #0d253f;
    }
`

const Sidebar = () => {
    const _genres = useSelector(state => state.genresReducer.genres)
    const dispatch = useDispatch()
    const [mobile, setMobile] = useState(true)

    useEffect(() => {
        dispatch(genres())
    }, [])

    const [movies, setMovies] = useState(true)
    const [series, setSeries] = useState(false)

    return (
        <>
            <NavbarMobile>
                <Burger onClick={() => setMobile(!mobile)}>
                    {mobile ? <Icon type="menu" /> : <Icon type="close" />}
                </Burger>
            </NavbarMobile>
            <MainWrapper mobile={mobile}>
                <StickyBox>
                    <Container>
                        <Logo />
                        <Titulo>Category</Titulo>
                        <TipoWrapper>
                            <Tipo
                                to="/movies"
                                onClick={() => {
                                    setMovies(true)
                                    setSeries(false)
                                }}
                            >
                                <TipoIcon type="right" />
                                Movies
                            </Tipo>
                            <Tipo
                                to="/series"
                                onClick={() => {
                                    setMovies(false)
                                    setSeries(true)
                                }}
                            >
                                <TipoIcon type="right" />
                                TV Shows
                            </Tipo>
                            <Tipo
                                to="/in-theaters/news"
                                onClick={() => {
                                    setMovies(false)
                                    setSeries(false)
                                }}
                            >
                                <TipoIcon type="right" />
                                In Theaters
                            </Tipo>
                        </TipoWrapper>
                        {movies && (
                            <>
                                <Titulo>Discover</Titulo>
                                <TipoWrapper>
                                    <Tipo to="/movies/discover/popular">
                                        <TipoIcon type="like" />
                                        Popular
                                    </Tipo>
                                    <Tipo to="/movies/discover/top-rated">
                                        <TipoIcon type="star" />
                                        Top Rated
                                    </Tipo>
                                    <Tipo to="/movies/discover/soon">
                                        <TipoIcon type="calendar" />
                                        Coming Soon
                                    </Tipo>
                                </TipoWrapper>
                                <Titulo>Genres</Titulo>
                                <TipoWrapper>
                                    {_genres.map(genre => (
                                        <Tipo to={`/movies/genres/${genre.name}/${genre.id}`} key={genre.id}>
                                            <TipoIcon type="right" />
                                            {genre.name}
                                        </Tipo>
                                    ))}
                                </TipoWrapper>
                            </>
                        )}
                        {series && (
                            <>
                                <Titulo>Discover</Titulo>
                                <TipoWrapper>
                                    <Tipo to="/series/discover/popular">
                                        <TipoIcon type="like" />
                                        Popular
                                    </Tipo>
                                    <Tipo to="/series/discover/top-rated">
                                        <TipoIcon type="star" />
                                        Top Rated
                                    </Tipo>
                                </TipoWrapper>
                                <Titulo>Genres</Titulo>
                                <TipoWrapper>
                                    {_genres.map(genre => (
                                        <Tipo to={`/series/genres/${genre.name}/${genre.id}`} key={genre.id}>
                                            <TipoIcon type="right" />
                                            {genre.name}
                                        </Tipo>
                                    ))}
                                </TipoWrapper>
                            </>
                        )}
                        <LogoMovieDB />
                    </Container>
                </StickyBox>
            </MainWrapper>
        </>
    )
}

export default Sidebar
