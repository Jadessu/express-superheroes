import { Router } from 'express'
import * as superheroesCtrl from "../controllers/superheroes.js"
//import superhero data
const router = Router()



router.get("/", superheroesCtrl.index)
router.get("/new", superheroesCtrl.new)
router.get("/:id", superheroesCtrl.show)
router.post("/", superheroesCtrl.create)
router.delete("/:id", superheroesCtrl.delete)

export {
  router
}

