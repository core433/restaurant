var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes/index');

var mongoose = require('mongoose');
// XXX Goes without saying this needs to change in production
mongoose.connect('localhost:27017/inventory')

// Anything under the inventory URL route should use resources under
// the /ng_inventory dir of this server app
app.use('/inventory',express.static(__dirname + '/ng_inventory'));

app.use('/', routes);

app.listen(8000);
console.log("App listening on port 8000");

