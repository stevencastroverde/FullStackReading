var express = require('express');
var router = express.Router();
const knex = require('../knexconnect')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('book')
  .select('Title', 'Page_Count as Number of Pages')
  .then((books) =>{
    res.render('books', {data:books});


  })
});

// router.get('/', function(req,res){
//   knex('book')
//   .where('ID', req.params.id)
//   .then((bookId) => {
//     console.log(bookId)
//     res.render('onebook', bookId);
//
//
//   })
//
//
//
//
// })



module.exports = router;
