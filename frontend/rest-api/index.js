require('dotenv').config();

const path = require("path")
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT
const mongoString = "mongodb://localhost:27017/blog"

const app = express()

mongoose.connect(mongoString, {
    useNewUrlParser: true, useUnifiedTopology: true
})

mongoose.connection.on("error", function(error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error)
    }
  })
  
  mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
  })

app.use(morgan('dev'))
app.use(helmet())

app.use(require("./routes/index.js"))

app.use("/assets", express.static(path.join(__dirname, "..", "..", "assets")))

app.listen(PORT, function() {
    console.log("Express API listening on port " + PORT)
})