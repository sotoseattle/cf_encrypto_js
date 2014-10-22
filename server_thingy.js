var express = require('express');
var app = express();

var encode = './master/index.html';
var decode = './master/decode.html';

app.get('/*', function(req, res){
  var target;
  if (req.url == '/master/index.html') { target = encode; }
  else { target = decode; }
  res.sendfile(target);
});

app.listen(4000, function() { console.log('listening')});
