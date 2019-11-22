class CellGenerator {
  constructor(dimension) {
    this.dimension = dimension;
  }

  coordinates() {
    let array = [];

    for (let x = 0; x < this.dimension; x++) {
      for (let y = 0; y < this.dimension; y++) {
        array.push({
          x: x,
          y: y
        });
      }
    }

    return array;
  }

  cells() {
    let coordinates = this.coordinates(3);

    coordinates.forEach(obj => (obj.crocodile = Math.random() < 0.2));
    coordinates.forEach(obj => (obj.hidden = true));
    coordinates.forEach(obj => (obj.flagged = false));

    coordinates.forEach(function(a) {
      const neighbours = coordinates.filter(function(b) {
        if (a === b) {
          return false;
        } else if (
          [b.x - 1, b.x, b.x + 1].includes(a.x) &&
          [b.y - 1, b.y, b.y + 1].includes(a.y)
        ) {
          return true;
        } else {
          return false;
        }
      });

      const crocodiles = neighbours.filter(function(c) {
        return c.crocodile;
      });

      if (!a.crocodile) {
        a.number = crocodiles.length;
      }
    });

    return coordinates;
  }
}

export default CellGenerator;
