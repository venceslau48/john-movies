import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Movie from "../components/Movie"
import Loader from "../components/Loader"
import Search from "../components/Search"
import Pagination from "../components/Pagination"

import { useSelector, useDispatch } from "react-redux"
import { moviesGenre, tvShowsGenre } from "../actions/genres"
import { searchMovies } from "../actions/movies"

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
    justify-content: center;
    gap: 5rem;
`

const Genre = props => {
    const _moviesGenre = useSelector(state => state.moviesReducer.movies.results)
    const _loading = useSelector(state => state.loadingReducer.loading)
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    //SEARCH MOVIES
    const onFormSubmit = e => {
        e.preventDefault()

        if (search.length === 0) {
            return
        }
        setSearch("")
        dispatch(searchMovies(search))
    }

    //LOAD MOVIES BY GENRE
    useEffect(() => {
        //MOVIES
        if (props.match.params.tipo === "movies") {
            dispatch(moviesGenre(props.match.params.id, page))
        }

        //TV SHOWS
        if (props.match.params.tipo === "series") {
            dispatch(tvShowsGenre(props.match.params.id, page))
        }
    }, [props.match.params.id, page])

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
                    {_moviesGenre.map(movie => (
                        <Movie
                            movie={movie}
                            key={movie.id}
                            categoria={props.match.params.tipo === "movies" ? "movie" : "serie"}
                        />
                    ))}
                </Grid>
            )}
            <Pagination previousPage={previousPage} nextPage={nextPage} page={page} />
        </Container>
    )
}

export default Genre
