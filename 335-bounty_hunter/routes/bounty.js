const express = require("express")
const bountyRouter = express.Router()
// const uuid = require("uuid").v4
const Contract = require("../models/bountyModel.js")


//  Sample Data //
// const bounties = [
//     {
//         firstName: "Boba",
//         lastName: "Fett",
//         living: true,
//         bountyPrice: "",
//         guild: "Bounty Hunter",
//         _id: uuid()
//     }
// ]

//  Routes  //
    // 1: Endpoint  2:CallBack  //

//  Get All
bountyRouter.get("/", (req, res, next) => {
    Contract.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })

    // res.send(bounties)
})

//  Post
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Contract(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })

    // newBounty._id = uuid()
    // bounties.push(newBounty)
    // res.send(newBounty)
})

//  Delete One
bountyRouter.delete("/:_id", (req, res, next) => {
    Contract.findOneAndDelete({ _id: req.params._id }, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Contract was deleted.`)    
    })
    
    // const bountyId = req.params._id
    // const bountyIndex = bounties.findIndex(body => body._id === bountyId)
    // bounties.splice(bountyIndex, 1)
})

//  Update One
bountyRouter.put("/:_id", (req, res, next) => {
    Contract.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updateBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateBounty)
        }
    )
    
    // const bountyId = req.params._id
    // const updateObject = req.body
    // const bountyIndex = bounties.findIndex(body => body._id === bountyId)
    // const updateBounty = Object.assign(bounties[bountyIndex], updateObject)
    // res.send(updateBounty)
})

module.exports = bountyRouter