var express = require('express');
var morgan = require('morgan'); //a request logger
var port = process.env.PORT || 8888;
var app = express();
//to get current command line directories or where current running file is stored
var path = require('path');

//logs all the requests made on port in developer format:
//:method :url :status :response-time ms - :res[content-length]
app.use(morgan('dev'));

//gives directory where static files (img, css, js) are kept so they can be
//accessed
app.use(express.static(path.join(__dirname, '/public')));

//app.get() is an html GET request
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/Homepage.html'));
})

//res.sendFile() is an express method that sends the user a file
app.get('/Characters', function (req, res) {
  res.sendFile(path.join(__dirname + '/Characters.html'));
})

//__dirname gives the directory where the running file is kept
app.get('/Books', function (req, res) {
  res.sendFile(path.join(__dirname + '/Books.html'));
})

app.get('/Quiz', function (req, res) {
  res.sendFile(path.join(__dirname + '/Quiz.html'));
})

app.listen(port);
console.log(`Listening on port ${port}`);
