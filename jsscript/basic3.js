class car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }
    getCarDetails() {
        console.log(this.model + " " + this.year);
    }
}
let car1 = new car("audi", 2024)
car1.getCarDetails()