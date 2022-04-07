const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//  Middleware (for each request)   //
app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.connect("mongodb://localhost:27017/bountyhunter",() => console.log("Connected to 'bountyhunter' database."))

//  Routes  //
    // 1: Endpoint  2:CallBack  //
app.use("/bounty", require("./routes/bounty.js"))

// Error Handler //
app.use((err, req, res) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
    // 1: Port  2: CallBack //
app.listen(9000, () => {
    console.log("Server is running on Port 9000!")
})