var express = require('express')
var router = express.Router()
const Task = require("../model/Task")

router.get("/tasks", (req, res) => {
    Task.findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

router.post("/task", (req, res) => {
    if (!req.body.task_name) {
        res.status(400)
        res.json({
            error: "Bad data"
        })
    } else {
        Task.create(req.body)
            .then(() => {
                res.send("Task added with success")
            })
            .catch(err => {
                res.send("Error: " + err)
            })
    }
})

module.exports = router