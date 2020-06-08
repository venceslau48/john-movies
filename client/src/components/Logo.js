import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const LinkWrapper = styled(Link)`
    width: 100%;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const LogoWrapper = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Logo = () => {
    return (
        <LinkWrapper to="/">
            <LogoWrapper src={require("../images/logo.png")} />
        </LinkWrapper>
    )
}

export default Logo
