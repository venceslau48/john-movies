const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const app = express()

const genresRoutes = require("./routes/genres")
const inTheatersRoutes = require("./routes/inTheaters")
const movieDetailRoutes = require("./routes/movieDetail")
const moviesRoutes = require("./routes/movies")
const tvShowsRoutes = require("./routes/tvShows")

//STATIC FILES (ASSETS)
app.use(express.static(path.join(__dirname, "client/build")))

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CORS
app.use(cors())

//ROUTES
app.use("/genres", genresRoutes)
app.use("/inTheaters", inTheatersRoutes)
app.use("/movieDetail", movieDetailRoutes)
app.use("/movies", moviesRoutes)
app.use("/tvShows", tvShowsRoutes)

//EXPRESS USING REACT APP BUILD (DEFINE ALWAYS AFTER ENDPOINTS)
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

const server = app.listen(process.env.PORT || 3001, function () {
    const port = server.address().port
    console.log("Server running on port: " + port)
})
