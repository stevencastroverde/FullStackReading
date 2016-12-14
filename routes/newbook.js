var express = require('express');
var router = express.Router();
var knex = require('../knexconnect')
var reg = new RegExp('^[0-9]$');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('newbook');
});

module.exports = router;

router.post('/book', function(req, res) {
    console.log(req.body)
     if (req.body.Title.length < 3) {
        res.send('Please Enter A Valid Book Title')
  //  } else if (reg.test(req.body.) === false) {
        //res.redirect('/books')

    } else{
      knex('book').insert(req.body)
      .then(() => res.redirect('/books'))


     }







})

module.exports = router;
