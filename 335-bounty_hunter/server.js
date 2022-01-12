const express = require("express")
const app = express()
const morgan = require("morgan")

//  Middleware (for each request)   //
app.use(express.json())
app.use(morgan())


//  Routes  //
    // 1: Endpoint  2:CallBack  //
app.use("/bounty", require("./routes/bounty.js"))

// Server Listen //
    // 1: Port  2: CallBack //
app.listen(3001, () => {
    console.log("Server is running on Port 3001!")
})