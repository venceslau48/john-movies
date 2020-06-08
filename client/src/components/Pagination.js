import React from "react"
import styled from "styled-components"

const StyledPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 3/-1;
    padding: 4rem 6rem;
`

const Page = styled.div`
    background: var(--color-primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-light);
    margin: 0 2rem;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
        opacity: 0.75;
    }
`

const Pagination = ({ previousPage, nextPage, page }) => {
    return (
        <StyledPagination>
            {page > 1 && <Page onClick={previousPage}>Page {page - 1}</Page>}
            <Page onClick={nextPage}>Page {page + 1}</Page>
        </StyledPagination>
    )
}

export default Pagination
