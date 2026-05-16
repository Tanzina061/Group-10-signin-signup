const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");


// Create Todo
router.post("/", async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get All Todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get Single Todo
router.get("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Update Todo
router.put("/:id", async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedTodo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Delete Todo
router.delete("/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);

        res.json({
            message: "Todo deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;