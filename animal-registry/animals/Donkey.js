import Animal from './Animal.js';

class Donkey extends Animal {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.commands = ['Walk', 'Run', 'Stop'];
  }
}

export default Donkey;
