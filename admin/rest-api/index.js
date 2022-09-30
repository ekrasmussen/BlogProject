const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const cors = require("cors")
const config = require("./config.js")

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

dotenv.config()

const PORT = process.env.PORT || 6181

const app = express();

mongoose.connect(process.env.MONGOSTRING, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("error", function(error) {
    if(process.env.NODE_ENV === "development") {
        console.log(error)
    }
})

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
})

app.use(helmet())
app.use(morgan("dev"))

app.use(cors({
    origin: process.env.NODE_ENV === "development" ? config.devAdminURL : "/admin.example.com$/",
    credentials: true
}))

app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }))

app.use(cookieParser())

app.use(require("./routes/admin-user/index.js"))

app.listen(PORT, function() {
    console.log("Admin API listening on port " + PORT)
})

