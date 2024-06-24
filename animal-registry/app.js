import readline from 'readline';
import Cat from './animals/Cat.js';
import Dog from './animals/Dog.js';
import Hamster from './animals/Hamster.js';
import Donkey from './animals/Donkey.js';
import Horse from './animals/Horse.js';
import Camel from './animals/Camel.js';
import { addNewAnimal, trainExistingAnimal, listAnimalsByBirthDate, getAnimalCount } from './utils/animalRegistry.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\nМеню:");
  console.log("1. Добавить новое животное");
  console.log("2. Обучить животное новым командам");
  console.log("3. Вывести список животных по дате рождения");
  console.log("4. Вывести общее количество животных");
  console.log("5. Выйти");

  rl.question("Выберите пункт меню: ", (choice) => {
    handleChoice(choice);
  });
}

function handleChoice(choice) {
  switch (choice) {
    case "1":
      addNewAnimalPrompt();
      break;
    case "2":
      trainExistingAnimalPrompt();
      break;
    case "3":
      listAnimalsByBirthDate();
      showMenu();
      break;
    case "4":
      console.log(`Общее количество животных: ${getAnimalCount()}`);
      showMenu();
      break;
    case "5":
      console.log("Программа завершена.");
      rl.close();
      return;
    default:
      console.log("Нет такого пункта. Попробуйте еще раз.");
      showMenu();
  }
}

function addNewAnimalPrompt() {
  rl.question("Введите имя животного: ", (name) => {
    rl.question("Введите дату рождения животного (ГГГГ-ММ-ДД): ", (birthDateStr) => {
      rl.question("Введите тип животного (Cat, Dog, Hamster, Donkey, Horse, Camel): ", (type) => {
        let animal;
        switch (type) {
          case "Cat":
            animal = new Cat(name, birthDateStr);
            break;
          case "Dog":
            animal = new Dog(name, birthDateStr);
            break;
          case "Hamster":
            animal = new Hamster(name, birthDateStr);
            break;
          case "Donkey":
            animal = new Donkey(name, birthDateStr);
            break;
          case "Horse":
            animal = new Horse(name, birthDateStr);
            break;
          case "Camel":
            animal = new Camel(name, birthDateStr);
            break;
          default:
            console.log("Неизвестный тип животного.");
            return;
        }

        addNewAnimal(animal);
        showMenu();
      });
    });
  });
}

function trainExistingAnimalPrompt() {
  rl.question("Введите имя животного, которое нужно обучить: ", (name) => {
    rl.question("Введите новые команды через запятую: ", (commandsStr) => {
      const newCommands = commandsStr.split(",").map((c) => c.trim());
      trainExistingAnimal(name, newCommands);
      showMenu();
    });
  });
}

showMenu();
