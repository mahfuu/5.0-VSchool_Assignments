const express = require("express")
const inventoryRouter = express.Router()
const InventoryModel = require("../models/inventory.js")

inventoryRouter.get("/", (req, res, next) => {
    InventoryModel.find((err, part) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(part)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new InventoryModel(req.body)
    newInventory.save((err, savedPart) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPart)
    })
})

inventoryRouter.get("/:partID",  (req, res) => {
    InventoryModel.findOne({_id: req.params.partID}, (err, part) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(part)
    })
})

inventoryRouter.delete("/:partID",  (req, res) => {
    InventoryModel.findOneAndDelete({_id: req.params.partID}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.partName}`)
    })
})

inventoryRouter.put("/:partID", (req, res, next) => {
    InventoryModel.findOneAndUpdate(
        { _id: req.params.partID },
        req.body,
        { new: true },
        (err, newInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(newInventory)
        }
    )
})

module.exports = inventoryRouter