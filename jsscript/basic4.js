class Animal {
    constructor(name) {
        this.name = name
        console.log("Parent cons..");
    }
    speak() {
        console.log(`${this.name} speak..`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        console.log("Child cons..");

    }
    bark() {
        console.log(`${this.name} and ${this.breed} Bark..`);
    }
}
let d1 = new Dog("gg","labrador");
d1.bark();