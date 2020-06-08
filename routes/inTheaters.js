const express = require("express")
const request = require("request")
const router = express.Router()

//ON AIR
router.get("/", async (req, res) => {
    const page = req.query.page

    try {
        request.get(
            {
                url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
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
