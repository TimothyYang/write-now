var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));

// compress content using gzip
app.use(express.compress());

app.listen(process.env.PORT || 3000);