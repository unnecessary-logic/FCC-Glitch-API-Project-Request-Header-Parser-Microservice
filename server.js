// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//Adding this line; found the IP returned from req.ip was always localhost.
//Adding this line grabs the remote host address.
app.set('trust proxy', true)

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//Where the assignment starts
//Grab IP from req.ip; the others are given to us in the assignment so it's a relatively straight forward assignment.
app.get("/api/whoami", function(req, res) {
  res.json({ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"], problem: "there's nothing here yet..."})
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
