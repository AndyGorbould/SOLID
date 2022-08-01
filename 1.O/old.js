"use strict";
class Dog {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'dog';
    }
}
class Cat {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'cat';
    }
}
class Parrot {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'parrot';
    }
}
class Zoo {
    constructor() {
        this._animals = new Array();
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
    makeSound(animal) {
        switch (animal.type) {
            case 'cat':
                return 'Miauw';
            case 'dog':
                return 'Woef';
            case 'parrot':
                return 'I am a pirate';
            // This is a good example of Open Closed Principal
            // using switch, more can me added in the future & the default error means that any future dev would see a mistake if they haven't added a noise case for the newer Class
            default:
                throw new Error('Unknown type: ' + animal.type);
        }
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + zoo.makeSound(animal) + "<br>");
});
