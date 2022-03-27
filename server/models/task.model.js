const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Content is required'],
        trim: true
    },
    state: {
        type: Boolean,
        required: true
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;