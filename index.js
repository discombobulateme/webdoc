const Jumpers = require("./jumpers");
const Places = require("./places");
/*
const paloma = {
  name: 'Paloma',
  age: 37,
  email: 'p@p.com',
  password: '123456',
  baseStart: 2009,
  instructor: 'Ruy Fernandes',
  places: [],
}
*/

class Jumpers {
  constructor(name, age, email, password, baseStart, instructor, places) {
    this.name = name
    this.age = age
    this.email = email
    this.password = password
    this.baseStart = baseStart
    this.instructor = instructor
    this.places = places
    this.jumps = []
  }

  addJump(jump) {
    this.jumps.push(jump)
  }

  addDiary(diary) {
    console.log(`I've just jumped out of ${diary}! This is my jump number ${this.jumps}`);
  }
}

class Places {
  constructor(type, height, landing) {
    this.type = type
    this.coordinates = []
    this.height = height
    this.landing = landing
  }

  addPlaces(type) {
    if (type === 'b' || 'a' || 's' || 'e') {
      return type
    } 
      throw 'You must type one of the objects: b as building, a as antenna, s as span or e as earth';
  }

}

class VisitedPlaces {
  constructor() {
    this.visit = visit
  }
}

const paloma = new Jumpers('paloma', 37, 'p@p.com', '123456', 2009, 'Ruy Fernandes', 'Ponde de Resende')
const onca = new Places('b', 450, 'green grass, with cows')

paloma.addJump(200)
paloma.addDiary('Kjerag') // returning undefined
onca.addPlace('resende')

console.log(paloma.jumps)
console.log(onca.type)
