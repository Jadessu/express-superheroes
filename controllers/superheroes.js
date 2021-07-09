import * as superheroDb from "../data/superheroes-db.js"

export{
    index,
    show,
    newSuperhero as new,
    create,
    deleteSuperhero as delete
    
}

function deleteSuperhero(req, res) {
  superheroDb.findByIdAndDelete(req.params.id, function(error, superhero) {
    res.redirect('/superheroes')
  })
}

function create(req, res){
  superheroDb.create(req.body, function(error, superhero){
    res.redirect("/superheroes")
  })
}

function newSuperhero(req, res) {
  res.render("superheroes/new")
}


function index(req, res) {
    superheroDb.find({}, function(error, superheroes) {
      res.render('superheroes/index', {
        superheroes: superheroes,
        error: error,
        time: req.time,
      })
    })
  }

  function show(req, res) {
    superheroDb.findById(req.params.id, function(error, superhero) {
      res.render('superheroes/show', {
        superhero: superhero,
        error: error
      })
    })
  }
  
  
 
 