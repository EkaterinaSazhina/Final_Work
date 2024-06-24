import Animal from './Animal.js';

class Horse extends Animal {
  constructor(name, birthDate) {
    super(name, birthDate);
    this.commands = ['Walk', 'Run', 'Stop'];
  }
}

export default Horse;
