// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        let count = 0
        this.sides.forEach(element => {
            count++
        })
        return count
    }

    get perimeter() {
        const initialValue = 0
        const sumWithInitial = this.sides.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          )
          return(sumWithInitial)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides !== 3) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.sides[0] === this.sides[1]){
            return true
        }
    }
}