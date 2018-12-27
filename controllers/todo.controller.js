const Todo = require('../models/todo.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            Task: req.body.Task,
            Desc: req.body.Desc
        }
    );
    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Task Created successfully')
    })
};

exports.todo_details = function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    })
};

exports.todo_update = function (req, res) {
    Todo.findOneAndReplace(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return next(err);
        res.send('Todo udpated.');
    });
};

exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Todo Deleted successfully!');
    })
};