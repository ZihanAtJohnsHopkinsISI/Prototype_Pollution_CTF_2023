var express = require('express');
var path = require('path');
var router = express.Router();

/* I haven't decide yet */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'pages', 'empty.html'))
});

module.exports = router;