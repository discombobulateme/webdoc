class Places {
  constructor(type, height, landing) {
    this.type = type
    this.coordinates = []
    this.height = height
    this.landing = landing
  }

  // function to verify if user input has one of the only accepted 4 values: BASE
  addPlaces(type) {
    if (type === 'b' || 'a' || 's' || 'e') {
      return type
    } 
      throw 'You must type one of the objects: b as building, a as antenna, s as span or e as earth';
  }

}

module.exports = Places;