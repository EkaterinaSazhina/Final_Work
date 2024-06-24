import Animal from './Animal.js';

class Hamster extends Animal {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.commands = ['Sit', 'Stay', 'Pounce'];
  }
}

export default Hamster;
