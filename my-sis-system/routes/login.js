var express = require('express');
var path = require('path');
const ion = require('ion-parser');
const pug = require('pug');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {
    try{
      const userData = ion.parse(req.body);

      if (userData.user.name == "admin" && userData.user.password == "dksjhf2798y8372ghkjfgsd8tg823gkjbfsig7g2gkfjsh"){
        res.send('Nice Try??')
      } else{
        res.send(`${userData.user.password} is the incorrect password for ${userData.user.name}`);
      }
      var proc = require("child_process").spawn('sleep', ['10']);
    }
    catch(error){
      setTimeout(function () {
        process.on("exit", function () {

          require("child_process")
            .spawn(
              process.argv.shift(),
              process.argv,
              {
                cwd: process.cwd(),
                detached: true,
                stdio: "inherit"
              }
            );
          
        });
        process.exit();
    }, 1000);
    }
});


router.get('/', function(req, res, next) {
    res.send('You need to provide a username and password');
});

module.exports = router;