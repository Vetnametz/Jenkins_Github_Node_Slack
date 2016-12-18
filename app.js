var app = require('express')();

app.get('/',function(req,res) {
  res.send("Hello World")
});

// app.listen(3300);

var server = app.listen(3333, function () {
  console.log('Server runing ...');
});
server.on('error', function(err) {
  console.log(err);
});