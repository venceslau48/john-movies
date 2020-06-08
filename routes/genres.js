const express = require("express")
const request = require("request")
const router = express.Router()

//GET SIDEBAR GENRES
router.get("/sidebar", async (req, res) => {
    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`,
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

//GET MOVIES BY GENRE
router.get("/movies", async (req, res) => {
    const id = req.query.id
    const page = req.query.page

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${id}&page=${page}`,
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

//GET TV SHOW BY GENRE
router.get("/tvShows", async (req, res) => {
    const id = req.query.id
    const page = req.query.page

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&with_genres=${id}&language=en-US&page=${page}`,
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
