const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let todos = [];

app.post("/todo", (req, res) => {
    const { text } = req.body;
    const todo = { id: Date.now(), text };
    todos.push(todo);
    res.json(todo);
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

// 🔥 THIS IS THE FIX
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Backend running on port", PORT);
});
