var express = require('express');
var router = express.Router();
const knex = require('../knexconnect')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('book')
  .select('ID', 'Title', 'Page_Count')
  .orderBy('ID', 'ASC')
  .then((books) =>{
    res.render('books', {data:books});


  })
});

router.get('/:id', function(req,res){
   knex('book')
   .where('ID', req.params.id)
   .first()
   .then((bookId) => {
     console.log(bookId)
     res.render('onebook', {data: bookId});


   })




 })

router.delete('/:id', function(req,res){
  knex('book')
  .where('ID', req.params.id)
  .del()
  .then(() => res.redirect('/books'));




})


module.exports = router;
