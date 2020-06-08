import React from "react"
import styled from "styled-components"

const Form = styled.form`
    grid-row: 1/2;
    text-align: center;
    margin: 3rem 0 5rem;

    @media ${props => props.theme.bp.smallest} {
        text-align: right;
        margin-right: 1.5rem;
    }
`

const StyledSearch = styled.input`
    width: 50%;
    box-shadow: var(--shadow-light);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--color-bg-light);
    color: var(--color-typo-light);
    font-size: 1.6rem;
    height: 5rem;

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: var(--color-typo-light);
    }

    @media ${props => props.theme.bp.largest} {
        width: 40%;
    }

    @media ${props => props.theme.bp.smallest} {
        width: 70%;
        z-index: 9999;
        position: fixed;
        top: 1.8rem;
        right: 2.4rem;
    }
`

const Search = ({ onFormSubmit, search, setSearch }) => {
    return (
        <Form onSubmit={onFormSubmit}>
            <StyledSearch
                type="search"
                placeholder="Procurar filmes..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </Form>
    )
}

export default Search
