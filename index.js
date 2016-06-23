var express = require('express');

var app = express();

app.set('view engine', 'ejs');
// `views` is also the default value
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index', {name: 'Freewind'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});