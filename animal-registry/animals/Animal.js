class Animal {
  constructor(name, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
    this.commands = [];
  }

  listCommands() {
    console.log(`Команды, которые может выполнять ${this.name}:`);
    this.commands.forEach((command) => console.log(command));
  }

  learnCommand(command) {
    this.commands.push(command);
    console.log(`${this.name} выучил новую команду: ${command}`);
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}

export default Animal;
