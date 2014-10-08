var express = require('express');
var app = express();
var path = require("path");

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname + '/public')));


app.get('/', function (req, res) {
  res.render('index', { title: 'Survive!'});
})