export { 
	find,
    findById,
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

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions)
    // If the object is empty, return all the todos
    if (conditionKeys.length === 0) return callback(null, superheroes)
    // make sure that all the properties on the conditions exists on the object
    if (!conditionKeys.every((i) => Object.keys(superheroes[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
			// Finally actually find what we're looking for
      return callback(null, superheroes.filter((todo) =>
        conditionKeys.every((propKey) => todo[propKey] === conditions[propKey])
      ))
    }
	// deal with errors
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
