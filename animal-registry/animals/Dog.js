import Animal from './Animal.js';

class Dog extends Animal {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.commands = ['Sit', 'Stay', 'Pounce'];
  }
}

export default Dog;
