class Animal {
    sound() {
        console.log("animal sound..");
    }
}
class Dog extends Animal {
    sound() {
        console.log("dog sound..");
    }

}
class Cat extends Animal {
    sound() {
        console.log("cat sound..");
    }

}

let cat = new Cat();
let dog = new Dog()
function animalFeature(animal) {
    animal.sound();
}
animalFeature(cat);
animalFeature(dog);
