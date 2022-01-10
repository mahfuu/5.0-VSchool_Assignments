const express = require("express")
const firstbase = express.Router()
const { uuid } = require('uuidv4')

const someObj = {
    task1: "Write an Express server to handle a Get Request that returns an object (of any kind) as a response.",
    id: uuid()
}

firstbase.get("/", (req, res, next) => {
    console.log("Get request received")
    res.send(someObj)
})

module.exports = firstbase