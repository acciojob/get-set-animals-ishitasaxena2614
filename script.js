class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make sound
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Dog extends Animal {
    // Dog-specific method
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    // Cat-specific method
    purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

