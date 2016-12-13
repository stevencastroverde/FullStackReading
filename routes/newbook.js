var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newbook');
});

module.exports = router;

router.post('/', function(req, res){
  console.log(req.body)




})
