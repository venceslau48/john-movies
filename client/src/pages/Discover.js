import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Movie from "../components/Movie"
import Loader from "../components/Loader"
import Search from "../components/Search"
import Pagination from "../components/Pagination"

import { useSelector, useDispatch } from "react-redux"
import { moviesPopular, moviesTopRated, moviesNewIn, searchMovies } from "../actions/movies"
import { tvShowPopular, tvShowTopRated, searchTvShows } from "../actions/tvShows"
import { inTheaters } from "../actions/inTheaters"

const Container = styled.div`
    grid-column: full-start/full-end;
    display: grid;
    grid-template-rows: min-content 1fr min-content;

    @media ${props => props.theme.bp.smallest} {
        grid-column: 1/-1;
        grid-row: 1/-1;
        margin-top: 6rem;
    }
`

const Grid = styled.div`
    display: grid;
    grid-row: 2/3;
    grid-template-columns: repeat(auto-fill, minmax(min-content, 28rem));
    grid-template-rows: min-content 1fr min-content;
    justify-content: center;
    gap: 5rem;
`

const Discover = props => {
    const _movies = useSelector(state => state.moviesReducer.movies.results)
    const _loading = useSelector(state => state.loadingReducer.loading)
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    //SEARCH MOVIES & TV SHOWS
    const onFormSubmit = e => {
        e.preventDefault()

        if (search.length === 0) {
            return
        }
        setSearch("")

        //MOVIES
        if (props.match.params.categoriaFilme) {
            dispatch(searchMovies(search))
        }

        //TV SHOWS
        if (props.match.params.categoriaSerie) {
            dispatch(searchTvShows(search))
        }
    }

    // LOAD MOVIES
    useEffect(() => {
        if (props.match.params.categoriaFilme === "popular") {
            dispatch(moviesPopular(page))
        }
        if (props.match.params.categoriaFilme === "top-rated") {
            dispatch(moviesTopRated(page))
        }
        if (props.match.params.categoriaFilme === "soon") {
            dispatch(moviesNewIn(page))
        }
    }, [props.match.params.categoriaFilme, page])

    //LOAD TV SHOWS
    useEffect(() => {
        if (props.match.params.categoriaSerie === "popular") {
            dispatch(tvShowPopular(page))
        }
        if (props.match.params.categoriaSerie === "top-rated") {
            dispatch(tvShowTopRated(page))
        }
    }, [props.match.params.categoriaSerie, page])

    // LOAD MOVIES IN THEATERS
    useEffect(() => {
        if (props.match.params.categoriaFilme === "news") {
            dispatch(inTheaters(page))
        }
    }, [props.match.params.categoriaFilme, page])

    //PAGINATION
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
            window.scrollTo(0, 0)
        }
    }

    const nextPage = () => {
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    return (
        <Container>
            <Search onFormSubmit={onFormSubmit} search={search} setSearch={setSearch} />
            {_loading ? (
                <Loader />
            ) : (
                <Grid>
                    {_movies.map(movie => (
                        <Movie
                            movie={movie}
                            key={movie.id}
                            categoria={props.match.params.categoriaFilme ? "movie" : "serie"}
                        />
                    ))}
                </Grid>
            )}
            <Pagination previousPage={previousPage} nextPage={nextPage} page={page} />
        </Container>
    )
}

export default Discover
