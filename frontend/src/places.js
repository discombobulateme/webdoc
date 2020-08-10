class Places {
  constructor(type, height, landing) {
    this.type = type
    this.coordinates = []
    this.height = height
    this.landing = landing
  }

  // function to verify if user input has one of the only accepted 4 values: BASE
  addPlaces(type) {
    const types = ['b', 'a', 's', 'e']

    if (types.includes(type)) return type
    throw 'You must type one of the objects: b as building, a as antenna, s as span or e as earth'
  }
}

module.exports = Places
