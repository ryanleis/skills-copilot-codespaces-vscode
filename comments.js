// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a database connection and schema
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');
var Comment = mongoose.model('Comment', { name: String, message: String });

// Create a route to get all comments
app.get('/comments', function(req, res) {
  Comment.find(function(err, comments) {
    res.send(comments);
  });
});

// Create a route to add a comment
app.post('/comments', function(req, res) {
  new Comment({ name: req.body.name, message: req.body.message }).save(function(err) {
    res.send('Thanks for your comment!');
  });
});

// Create a route to delete a comment
app.delete('/comments/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment) {
    comment.remove(function(err) {
      res.send('Comment deleted');
    });
  });
});

// Start the web server
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});


