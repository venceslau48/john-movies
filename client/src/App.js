import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import Genre from "./pages/Genre";
import MovieDetail from "./pages/MovieDetail";

const Container = styled.div`
    display: grid;
    grid-template-columns:
        [sidebar-start] 25rem [sidebar-end full-start] minmax(
            6rem,
            1fr
        ) [center-start] repeat(
            8,
            [col-start] minmax(min-content, 14rem) [col-end]
        )
        [center-end] minmax(6rem, 1fr) [full-end];
    background: var(--color-bg);
`;

const App = () => {
    return (
        <Container>
            <Sidebar />
            <Switch>
                {/* HOME */}
                <Route
                    path="/"
                    exact
                    render={() => <Redirect to="/movies/discover/popular" />}
                />
                <Route
                    path="/movies"
                    exact
                    render={() => <Redirect to="/movies/discover/popular" />}
                />
                <Route
                    path="/movies/discover/:categoriaFilme"
                    exact
                    component={Discover}
                />
                <Route
                    path="/:tipo/genres/:genero/:id"
                    exact
                    component={Genre}
                />
                <Route
                    path="/series"
                    exact
                    render={() => <Redirect to="/series/discover/popular" />}
                />
                <Route
                    path="/series/discover/:categoriaSerie"
                    exact
                    component={Discover}
                />
                <Route
                    path="/in-theaters/:categoriaFilme"
                    exact
                    component={Discover}
                />
                {/* DETAILS */}
                <Route
                    path="/details/:categoria/:id"
                    exact
                    component={MovieDetail}
                />
            </Switch>
        </Container>
    );
};

export default App;
