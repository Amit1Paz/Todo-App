const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');

router.get('/', (req, res) => {
    Task.find()
        .then(result => res.json(result))
        .catch(err => console.log(err));
})

router.post('/', (req, res) => {
    const content = req.body.content;
    const state = req.body.state;

    const task = new Task({ content, state });
    
    task.save()
        .then(res => res.data)
        .then(() => console.log('Added'))
        .catch(err => console.log(err));
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const state = req.body.state;

    Task.updateOne({_id: id}, {state: state})
        .then(() => console.log('Updated'))
        .catch(err => console.log(err));
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Task.deleteOne({_id: id})
        .then(() => console.log('Deleted'))
        .catch(err => console.log(err));
})

module.exports = router;