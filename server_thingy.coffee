express = require('express')
app = express()

encode = './master/index.html'
decode = './master/decode.html'

app.get('/*', (req, res) ->
  if (req.url == '/master/index.html') { target = encode; }
  else { target = decode; }
  res.sendfile(target);
});

app.listen(4000, function() { console.log('listening')});
