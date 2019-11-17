class CellGenerator {
  constructor(dimension) {
    this.dimension = dimension
  }

  coordinates() {
    var array = []

    for(var x = 0; x < this.dimension; x++) {
      for(var y = 0; y < this.dimension; y++) {
        array.push({
          x: x,
          y: y,
        })
      }
    }

    return array
  }

  addCrocodile(obj) {
    obj["crocodile"] = (Math.random() < 0.1)
  }

  addHidden(obj) {
    obj["hidden"] = true
  }

  addFlagged(obj) {
    obj["flagged"] = false
  }

  cells() {
    var coordinates = this.coordinates(3)

    coordinates.forEach(this.addCrocodile)
    coordinates.forEach(this.addHidden)
    coordinates.forEach(this.addFlagged)

    coordinates.forEach(function (a) {

      const neighbours = coordinates.filter(function(b) {
        if (a === b) {
          return false
        } else if ([b["x"] - 1, b["x"], b["x"] + 1].includes(a["x"]) && [b["y"] - 1, b["y"], b["y"] + 1].includes(a["y"])) {
          return true
        } else {
          return false
        }
      })

      const crocodiles = neighbours.filter(function(c) {
        return c["crocodile"] === true
      })

      if (a["crocodile"] === false) {
        a["number"] = crocodiles.length
      }
    })

    return coordinates
  }
}

export default CellGenerator;
