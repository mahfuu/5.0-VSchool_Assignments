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

module.exports = inventoryRouter