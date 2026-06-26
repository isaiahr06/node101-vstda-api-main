const express = require('express');
const morgan = require('morgan');

const app = express();

// add your code here
app.use(morgan('dev'));

app.use(express.json());

let todos =  [
        {
            todoItemId: 0,
            name: 'an item',
            priority: 3,
            completed: false
        },
        {
            todoItemId: 1,
            name: 'another item',
            priority: 2,
            completed: false
        },
        {
            todoItemId: 2,
            name: 'a done item',
            priority: 1,
            completed: true
        }
    ];

const gen = {
    "status": "ok"
  };

app.get('/', (req,res) => {
    res.status(200).json(gen);
})

app.get('/api/TodoItems', (req, res) => {
    res.status(200).json(todos);
})

app.get('/api/TodoItems/:id', (req, res) => {
    let key = parseInt(req.params.id);
    res.status(200).json(todos.find(todo => todo.todoItemId === key));
})

app.post('/api/TodoItems', (req,res) => {
    const newTodo = {
        todoItemId: req.body.todoItemId,
        name: req.body.name,
        priority: req.body.priority,
        completed: req.body.completed
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.delete('/api/TodoItems/:id', (req,res) => {
    let key1 = parseInt(req.params.id);
    const deletedTodo = (todos.find(todo => todo.todoItemId === key1));
    todos = todos.filter(todo => todo.todoItemId !== key1);
    res.json(deletedTodo);
})

module.exports = app;