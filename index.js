// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get diameter(){
        return this.radius * 2
    }

    set circumference(circumference){
        this.radius = (circumference / Math.PI) / 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    set area (area) {
        this.radius = Math.sqrt((area / Math.PI))
    }

    get area() {
        return ((this.radius)**2) * Math.PI
    }
}