class Jumpers {
  constructor(name, email, password, baseStart, instructor, places, age, gender) {
    // mandatory content
    this.name = name;
    this.email = email;
    this.password = password;
    this.baseStart = baseStart;
    this.instructor = instructor;
    this.places = places;

    // non mandatory content
    this.age = age;
    this.gender = gender;
    this.jumps = [];
    this.history = "";
  }

  addJump(jump) {
    this.jumps.push(jump);
  }

  get diary() {
    return `
      # This is ${this.name}'s (${this.name}) history
      Started jumping in: ${this.baseStart}
      Instructor's name: ${this.instructor}
      History: ${this.history}

      ## Logbook (${this.jumps.length} jumps) 😲
      ${this.places
      .map(place => {
        return `### ${place}
        `;
      }).join("\n")}
    `;
  }

  // use setter to let others know this property cannot be reassigned
  set diary(newValue) {
    throw new Error(`diary is a getter, you cannot overwrite ${this.name} history with ${newValue}!`);
  }
}

module.exports = Jumpers;