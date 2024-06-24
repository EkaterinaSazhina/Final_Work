let animalRegistry = [];
let animalCount = 0;

function addNewAnimal(animal) {
  animalRegistry.push(animal);
  animalCount++;
  animal.listCommands();
}

function trainExistingAnimal(name, commands) {
  const animal = animalRegistry.find((a) => a.name === name);

  if (!animal) {
    console.log("Животное не найдено.");
    return;
  }

  commands.forEach((command) => animal.learnCommand(command));
}

function listAnimalsByBirthDate() {
  animalRegistry.sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate));
  animalRegistry.forEach((animal) => {
    console.log(`${animal.name} (${animal.constructor.name}), дата рождения: ${animal.birthDate}, возраст: ${animal.getAge()} лет`);
  });
}

function getAnimalCount() {
  return animalCount;
}

export { addNewAnimal, trainExistingAnimal, listAnimalsByBirthDate, getAnimalCount };
