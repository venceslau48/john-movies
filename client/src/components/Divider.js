import styled from "styled-components"

const Divider = styled.span`
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    display: inline-block;
    background: var(--color-primary);
    margin: 0 1rem;

    @media ${props => props.theme.bp.large} {
        margin: 1rem 0;
    }

    @media ${props => props.theme.bp.medium} {
        margin: 0 1rem;
    }

    @media ${props => props.theme.bp.small} {
        margin: 1rem 0;
    }
`
export default Divider
