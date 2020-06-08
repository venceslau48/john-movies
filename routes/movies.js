const express = require("express")
const request = require("request")
const router = express.Router()

//GET POPULAR MOVIES
router.get("/popular", async (req, res) => {
    const page = req.query.page

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
                headers: {
                    "content-type": "application/json"
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

//GET TOP RATED MOVIES
router.get("/topRated", async (req, res) => {
    const page = req.query.page

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
                headers: {
                    "content-type": "application/json"
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

//GET COMING SOON MOVIES
router.get("/comingSoon", async (req, res) => {
    const page = req.query.page

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
                headers: {
                    "content-type": "application/json"
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

//SEARCH MOVIES
router.get("/search", async (req, res) => {
    const search = req.query.search

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${search}`,
                headers: {
                    "content-type": "application/json"
                }
            },
            (error, response, body) => {
                res.send(body)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
