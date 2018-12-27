const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    Task: { type: String, required: true, max: 100 },
    Desc: {type: String, required: true, max: 200 }  
});


// Export the model
module.exports = mongoose.model('Todo', TodoSchema);