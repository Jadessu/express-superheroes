export { 
	find,
    findById,
    create,
    findByIdAndDelete
}

const superheroes = [
  {name: 'Superman', superpowers: true, _id: 125223},
  {name: 'Batman', superpowers: false, _id: 127904},
  {name: 'Flash', superpowers: true, _id: 139608},
  {name: 'Speedy', superpowers: false, _id: 129608},
  {name: 'Martian Manhunter', superpowers: true, _id: 139408},
  {name: 'Nightwing', superpowers: false, _id: 134208},
  {name: 'Wonder Woman', superpowers: true, _id: 138608},
  {name: 'Robin', superpowers: false, _id: 130608},
  {name: 'Aquaman', superpowers: true, _id: 139618},
  {name: 'Green Arrow', superpowers: false, _id: 156208},
]

function findByIdAndDelete(id, callback) {
  try { 
    const idx = superheroes.findIndex(superhero => superhero._id == parseInt(id))
    const deletedSuperhero = superheroes.splice(idx, 1)
    if (!deletedSuperhero.length ) throw new Error ('No Superhero was deleted')
    return callback(null, deletedSuperhero[0])
  } catch(error) {
    return callback(error, null)
  }
}

function create(superhero, callback){
  superhero._id = Date.now() % 1000000
  superhero.superpowers = false
  superheroes.push(superhero)
  return callback(null, superhero)

}

const find = (conditions, callback) => {
  
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions) 
    if (conditionKeys.length === 0) return callback(null, superheroes)
    if (!conditionKeys.every((i) => Object.keys(superheroes[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
      return callback(null, superheroes.filter((superhero) =>
        conditionKeys.every((propKey) => superhero[propKey] === conditions[propKey])
      ))
    }
	
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
    try {
      const superhero = superheroes.find(superhero => superhero._id === parseInt(id))
      if (!superhero) throw new Error ('No such superhero in our database with that ID')
      return callback(null, superhero)
    } catch (error) {
      console.log(error)
      return callback(error, null)
    }
  }

 

  