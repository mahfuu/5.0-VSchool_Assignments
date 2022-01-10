const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4

//  Sample Data //
const bounties = [
    {
        firstName: "Boba",
        lastName: "Fett",
        living: true,
        bountyPrice: 0,
        guild: "",
        _id: uuid()
    }
]

//  Routes  //
    // 1: Endpoint  2:CallBack  //

//  Get All
bountyRouter.get("/", (req, res, next) => {
    res.send(bounties)
})

//  Post
bountyRouter.post("/", (req, res, next) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`Succesfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

//  Delete One
bountyRouter.delete("/:_id", (req, res, next) => {
    const bountyId = req.params._id
    const bountyIndex = bounties.findIndex(body => body._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Bounty ID ${bountyId} was deleted.`)
})

//  Update One
bountyRouter.put("/:_id", (req, res, next) => {
    const bountyId = req.params._id
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(body => body._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updateBounty)
})

module.exports = bountyRouter