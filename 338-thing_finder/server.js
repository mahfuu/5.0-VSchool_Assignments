const express = require("express")
const app = express()
const port = 9000
const uuid = require("uuid").v4

app.use(express.json())

const inventory = [
    {
        _id: uuid(),
        partName: "Medication Cup",
        partNumber: 200,
        cost: 5.00,
        quantity: 1000,
        released: false
    },
    {
        _id: uuid(),
        partName: "Handset",
        partNumber: 400,
        cost: 15.00,
        quantity: 1000,
        released: false
    },
    {
        _id: uuid(),
        partName: "Circuit Board",
        partNumber: 800,
        cost: 12.00,
        quantity: 10000,
        released: true
    },
    {
        _id: uuid(),
        partName: "Battery",
        partNumber: 900,
        cost: 3.00,
        quantity: 10000,
        released: true
    },
    {
        _id: uuid(),
        partName: "Unit Box",
        partNumber: 980,
        cost: 1.30,
        quantity: 9000,
        released: true
    },
]

app.get("/inventory", (req, res) => {
    res.send(inventory)
})

app.get("/inventory/:id", (req, res) => {
    const id = req.params.id
    const foundPart = inventory.find(part => part._id === id)
    res.send(foundPart)
})

app.get("/inventory/search/released", (req, res) => {
    const released = req.query.released
    const filteredParts = inventory.filter(part => part.released === true)
    res.send(filteredParts)
})

app.post("/inventory", (req, res) => {
    const newInventory = req.body
    newInventory._id = uuid()
    inventory.push(newInventory)
    res.send(
        `Successfully added Part Number ${partNumber}
        , ${partName} to Inventory.`
    )
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})