
const Task = require('../models/task');

let tasks = [
    {id: 1, title: 'Tarea 1', description: 'Descripcion de la tarea 1'},
    {id: 2, title: 'Tarea 2', description: 'Descripcion de la tarea 2'}
];

function getAllTasks(){
    return tasks;
}

function createTask(Title, description){
    const newTask = new Task(tasks.length+1, title, description);
    tasks.push(newTask);
    return newTask;
}

module.exports ={
    getAllTasks,
    createTask
}