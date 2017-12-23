var express = require('express');
var router = express.Router();
var wisher = "";
function gen(len){
  var text = " ";
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < len; i++ )
      text += charset.charAt(Math.floor(Math.random() * charset.length));

  var random_string = text.substring(0,24);
  // console.log("random_string", random_string);
  return random_string;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  wisher = req.query.wisher;
  console.log("this is wisher", wisher);
  res.render('index', { wisher: wisher, link:"undefined" });
});

router.post('/', function(req, res) {
  var name = req.body.name;
  console.log("form name", name);
  // var random_string = gen(32);
  var link = "https://wishnow.site/?name="+name;
  res.render("index",{name:name, wisher: wisher, link:link})
});

module.exports = router;
