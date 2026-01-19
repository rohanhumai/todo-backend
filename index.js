const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// in-memory todo list
let todos = [];

/**
 * Add a todo
 * body: { text }
 */
app.post("/todo", (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Todo text required" });
    }

    const newTodo = {
        id: Date.now(),
        text
    };

    todos.push(newTodo);
    res.json(newTodo);
});

/**
 * Get all todos
 */
app.get("/todos", (req, res) => {
    res.json(todos);
});

app.listen(3001, () => {
    console.log("Backend running on port 3001");
});
