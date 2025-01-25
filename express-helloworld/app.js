var express = require('express');
app = express();

ap5p.get('/', function (req, res) {
  var response = 'This is version 2 of the app.' + '\n';  
  res.send(response);
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});
// This is a new route that takes a parameter, called name.
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});