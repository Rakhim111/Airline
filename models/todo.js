const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: 'N/A'
    }
});

module.exports = mongoose.model("Todo", todoSchema);
