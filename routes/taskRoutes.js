const express = require('express');
const router = express.Router();
const taskcontroller = require('../Controllers/taskController');
const authutils = require('../middleware/authUtils');

function authenticate(req, res, next){
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({error:'Unauthorized'});
    }
    const decodedtoken = authutils.verifyToken(token);
    if(!decodedtoken){
        return res.status(401).json ({error: 'Token invalid'});
    }
    req.user = decodedtoken;
    next();
}

router.get('/', authenticate, (req,res)=>{
    //const tasks = 
    res.json(taskcontroller.getAllTasks)
});

router.post('/', authenticate, (req, res)=> { 
   const {title, descriptioon} = req.body;
   const newTask = taskcontroller.createTask(title,descriptioon);
   res.status(201).json(newTask);
});

module.exports = router;
