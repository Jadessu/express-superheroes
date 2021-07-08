import * as superheroDb from "../data/superheroes-db.js"

export{
    index,
    show,
    
}


function index(req, res) {
    superheroDb.find({}, function(error, superheroes) {
      res.render('superheroes/index', {
        superheroes: superheroes,
        error: error
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
  