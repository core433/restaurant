var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Home page should go here!');
});

router.get('/inventory', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../ng_inventory')})
});

module.exports = router;