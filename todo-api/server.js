const express = require("express");
const fs = require("fs");

const app = express();
app.set('json spaces', 2); 
app.use(express.json());

const FILE_NAME = "todo.json";



// READ TODOS
const readTodos = () => {

    const data = fs.readFileSync(FILE_NAME);

    return JSON.parse(data);

};



// WRITE TODOS
const writeTodos = (todos) => {

    fs.writeFileSync(FILE_NAME, JSON.stringify(todos, null, 2));

};




// CREATE TODO
app.post("/todos", (req, res) => {

    const todos = readTodos();

    const { id, title } = req.body;

    const newTodo = {
        id,
        title,
        completed: false
    };

    todos.push(newTodo);

    writeTodos(todos);

    res.status(201).json({
        message: "Todo created successfully",
        todo: newTodo
    });

});




// GET ALL TODOS + SELECTIVE ID RANGE
app.get("/todos", (req, res) => {

    const todos = readTodos();

    const { startId, endId } = req.query;

    
    // SELECTIVE TODO BY ID RANGE
    if (startId && endId) {

        const filteredTodos = todos.filter(
            t => t.id >= Number(startId) && t.id <= Number(endId)
        );

        return res.status(200).json(filteredTodos);

    }

    
    // GET ALL TODOS
    res.status(200).json(todos);

});




// GET SINGLE TODO
app.get("/todos/:id", (req, res) => {

    const todos = readTodos();

    const id = Number(req.params.id);

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    res.status(200).json(todo);

});




// UPDATE TODO
app.put("/todos/:id", (req, res) => {

    const todos = readTodos();

    const id = Number(req.params.id);

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
        todo.title = title;
    }

    if (completed !== undefined) {
        todo.completed = completed;
    }

    writeTodos(todos);

    res.status(200).json({
        message: "Todo updated successfully",
        todo
    });

});




// DELETE TODO
app.delete("/todos/:id", (req, res) => {

    const todos = readTodos();

    const id = Number(req.params.id);

    const filteredTodos = todos.filter(t => t.id !== id);

    writeTodos(filteredTodos);

    res.status(200).json({
        message: "Todo deleted successfully"
    });

});




const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});