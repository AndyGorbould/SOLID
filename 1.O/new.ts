class Dog {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type(): string {
    return "dog";
  }

  makeSound(): string {
    return "Woef";
  }
}

class Cat {
  private _name;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type(): string {
    return "cat";
  }

  makeSound(): string {
    return "Miauw";
  }
}

class Parrot {
    private _name;
  
    set name(value) {
      this._name = value;
    }
  
    get name() {
      return this._name;
    }
  
    get type(): string {
      return "parrot";
    }
  
    makeSound(): string {
      return "I am a pirate";
    }
  }

  class Emu {
    private _name;
  
    set name(value) {
      this._name = value;
    }
  
    get name() {
      return this._name;
    }
  
    get type(): string {
      return "emu";
    }
  
    makeSound(): string {
      return "gwaaark";
    }
  }
    
class Zoo {
  private _animals: Array<Object> = new Array<Object>();

  public addAnimal(animal: object) {
    this._animals.push(animal);
  }

  get animals(): Array<Object> {
    return this._animals;
  }
}

let zoo = new Zoo();
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.addAnimal(new Parrot());
zoo.addAnimal(new Emu());

zoo.animals.forEach((animal) => {
  document.querySelector("#target").innerHTML +=
    animal.type + ": " + animal.makeSound() + "<br>";
});
