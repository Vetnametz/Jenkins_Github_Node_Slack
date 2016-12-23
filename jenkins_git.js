var app = require('express')();

app.get('/',function(req,res) {
  res.send("Hello World and Merry Christmas + Slack")
});

var server = app.listen(3333, function () {
  console.log('Server running ...');
});
server.on('error', function(err) {
  console.log(err);
  
});