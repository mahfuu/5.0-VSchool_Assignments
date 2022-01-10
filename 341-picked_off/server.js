const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.use("/pickoff", require("./firstbase.js"))

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})