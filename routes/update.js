var express = require('express');
var router = express.Router();
var knex = require('../knexconnect')

router.get('/:id', function(req,res){
  knex('book')
  .where('ID', req.params.id)
  .first()
  .then((bookId) => {
    console.log(bookId)
    res.render('update', {data: bookId});


  })



})

router.put('/:id', function(req,res) {
  console.log(req.body)
  knex('book')
  .where('ID' , req.body.id)
  .update({
    Title: req.body.Title,
    Page_Count: Number(req.body.Page_Count),
    Programming_Languages: req.body.Programming_Languages,
    ISBN: req.body.isbn


  })
  .then(() => {
    res.redirect('/books/' +req.body.id)




  })




})


module.exports = router;
