import React from "react"
import styled from "styled-components"
import { Rate } from "antd"

const ContainerRating = styled.div`
    display: flex;
    align-items: center;
`

const StarsWrapper = styled(Rate)`
    line-height: 1;
    position: relative;
    margin-right: 1rem;

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

const StyledRating = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-typo);
`

const Rating = ({ movie }) => {
    return (
        <ContainerRating>
            <StarsWrapper disabled value={movie.vote_average / 2} />
            <StyledRating>{movie.vote_average / 2}</StyledRating>
        </ContainerRating>
    )
}

export default Rating
