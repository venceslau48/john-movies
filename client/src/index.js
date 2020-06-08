import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";

//REACT ROUTER
import { BrowserRouter } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

//STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyle from "./utils/globals";

//SCROLL TO TOP
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Fragment>
                <Helmet>
                    <title>Ez Movie</title>
                    <meta name="description" content="Some description about website" />
                    <link rel="canonical" href="#" />
                </Helmet>
                <BrowserRouter>
                    <ScrollToTop>
                        <App />
                    </ScrollToTop>
                </BrowserRouter>
                <GlobalStyle />
            </Fragment>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
