var express = require("express");
var app = express();

// compress content using gzip
app.use(express.compress());

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
