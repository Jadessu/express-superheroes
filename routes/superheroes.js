import { Router } from 'express'
import * as superheroesCtrl from "../controllers/superheroes.js"
//import superhero data
const router = Router()

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })

export {
  router
}

router.get("/", superheroesCtrl.index)
router.get("/:id", superheroesCtrl.show)
