const express = require("express")
const request = require("request")
const router = express.Router()

//GET MOVIE DETAIL
router.get("/movie", async (req, res) => {
    const id = req.query.id

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`,
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

//GET TV SHOW DETAIL
router.get("/tvShow", async (req, res) => {
    const id = req.query.id

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`,
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
