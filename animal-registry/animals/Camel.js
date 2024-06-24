import Animal from './Animal.js';

class Camel extends Animal {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.commands = ['Walk', 'Run', 'Stop'];
  }
}

export default Camel;
