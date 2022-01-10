const express = require("express")
const app = express()

//  Middleware (for each request)   //
app.use(express.json())

//  Routes  //
    // 1: Endpoint  2:CallBack  //
app.use("/bounty", require("./routes/bounty.js"))

// Server Listen //
    // 1: Port  2: CallBack //
app.listen(3000, () => {
    console.log("Server is running on Port 3000!")
})