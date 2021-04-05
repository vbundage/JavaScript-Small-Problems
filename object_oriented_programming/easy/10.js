class Shelter {
  constructor() {
    this.owners = {};
    this.unadoptedPets = {};
  }

  adopt(owner, pet) {
    owner.adoptPet(pet);
    this.recordOwnerAdoption(owner);
  }

  shelterPet(pet) {
    if (!this.unadoptedPets.hasOwnProperty(pet.getName())) {
      this.unadoptedPets[pet.getName()] = pet;
    }
  }

  numberOfPets() {
    return Object.keys(this.unadoptedPets).length;
  }

  recordOwnerAdoption(owner) {
    if (!this.owners.hasOwnProperty(owner.getName())) {
      this.owners[owner.getName()] = owner;
    }
  }

  printUnadoptedPets() {
    console.log("The Animal Shelter has the following unadopted pets:");
    Object.values(this.unadoptedPets).forEach(pet => {
      console.log(`a ${pet.getSpecies()} named ${pet.getName()}`);
    });
  }

  printAdoptions() {
    Object.values(this.owners).forEach(owner => {
      console.log();
      console.log(`${owner.getName()} has adopted the following pets:`);
      owner.getPets().forEach(pet => {
        console.log(`a ${pet.getSpecies()} named ${pet.getName()}`);
      });
    });
    console.log();
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  getName() {
    return this.name;
  }

  getPets() {
    return this.pets;
  }

  numberOfPets() {
    return this.getPets().length;
  }

  adoptPet(pet) {
    this.pets.push(pet);
  }
}

class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  getSpecies() {
    return this.species;
  }

  getName() {
    return this.name;
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.shelterPet(sweetie);
shelter.shelterPet(molly);
shelter.printUnadoptedPets();
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`The Animal Shelter has ${shelter.numberOfPets()} unadopted pets.`);

/*
Write the classes and methods that will be necessary to make this code run, and log the following output:

P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/