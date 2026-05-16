const express = require("express");

const router = express.Router();

const fs = require("fs");

const filePath = "./data/todos.json";


// Get All Todos
router.get("/", (req, res) => {

    const data = fs.readFileSync(filePath);

    const todos = JSON.parse(data);

    res.json(todos);
});


// Create Todo
router.post("/", (req, res) => {

    const data = fs.readFileSync(filePath);

    const todos = JSON.parse(data);

    const newTodo = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };

    todos.push(newTodo);

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

    res.status(201).json(newTodo);
});


// Get Single Todo
router.get("/:id", (req, res) => {

    const data = fs.readFileSync(filePath);

    const todos = JSON.parse(data);

    const todo = todos.find(t => t.id == req.params.id);

    res.json(todo);
});


// Update Todo
router.put("/:id", (req, res) => {

    const data = fs.readFileSync(filePath);

    let todos = JSON.parse(data);

    todos = todos.map(todo => {

        if (todo.id == req.params.id) {

            return {
                ...todo,
                ...req.body
            };
        }

        return todo;
    });

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

    res.json({
        message: "Todo updated"
    });
});


// Delete Todo
router.delete("/:id", (req, res) => {

    const data = fs.readFileSync(filePath);

    let todos = JSON.parse(data);

    todos = todos.filter(todo => todo.id != req.params.id);

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

    res.json({
        message: "Todo deleted"
    });
});

module.exports = router;