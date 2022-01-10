const express = require("express")
const todoRouter = express()
const uuid = require("uuid").v4

const todoList = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: ""
    }
]

todoRouter.get("/", (req, res, next) => {
    console.log("Getting todos from todoList...")
    res.send(todoList)
})

todoRouter.post("/", (req, res, next) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todoList.push(newTodo)
    res.send(`Succesfully added ${newTodo.name} to the database!`)
})

todoRouter.get("/:id", (req, res) => {
    const id = req.params.id
    const foundTodo = todoList.find(todo => todo._id === id)
    res.send(foundTodo)
})

todoRouter.delete("/:_id", (req, res, next) => {
    const id = req.params._id
    const todoIndex = todoList.findIndex(todo => todo._id === id)
    todoList.splice(todoIndex, 1)
    res.send(`Todo ID ${id} was deleted.`)
})

todoRouter.put("/:_id", (req, res, next) => {
    const id = req.params._id
    const updateObject = req.body
    const todoIndex = todoList.findIndex(todo => todo._id === id)
    const updateTodo = Object.assign(todoList[todoIndex], updateObject)
    res.send(updateTodo)
})

module.exports = todoRouter