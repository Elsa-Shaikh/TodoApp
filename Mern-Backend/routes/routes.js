const express = require('express')
const {addTodo,getAllTodo,doneTodo,updateTodo,deleteTodo} = require('../controller/todoController')
const route = express.Router();

route.post('/todo',addTodo) 
route.get('/getAllTodo',getAllTodo) 
route.get('/doneTodo/:id',doneTodo)
route.put('/updateTodo/:id',updateTodo)
route.delete('/deleteTodo/:id',deleteTodo)



module.exports = route;
