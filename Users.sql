#CREATE DATABASE HumanFriends;
USE HumanFriends;
CREATE TABLE Cats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200) NOT NULL
);

CREATE TABLE Dogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200) NOT NULL
);

CREATE TABLE Hamsters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200) NOT NULL
);

CREATE TABLE Horses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200) NOT NULL
);

CREATE TABLE Camels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200) NOT NULL
);

CREATE TABLE Donkeys (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200) NOT NULL
);
INSERT INTO Cats (name, birthDate, commands) VALUES
('lolly', '2023-02-01', 'Sit'),
('Whiskers', '2018-04-15', 'Sit, Stay, Pounce');

INSERT INTO Dogs (name, birthDate, commands) VALUES
('Buddy', '2020-09-01', 'Sit, Stay, Run'),
('Stiv', '2015-06-03', 'Sit, Stay');

INSERT INTO Hamsters (name, birthDate, commands) VALUES
('Hammy', '2021-02-28', 'Sit, Stop');

INSERT INTO Horses (name, birthDate, commands) VALUES
('Bella', '2015-06-10', 'Walk, Run, Stop'),
('Stella', '2018-05-12', 'Walk, Run, Stop'),
('Ben', '2019-12-10', 'Walk, Run, Stop');

INSERT INTO Camels (name, birthDate, commands) VALUES
('Hump', '2017-11-22', 'Walk, Run, Stop'),
('Bella', '2023-06-10', 'Walk, Run');

INSERT INTO Donkeys (name, birthDate, commands) VALUES
('Eva', '2019-03-05', 'Walk, Run, Stop');

show databases;
show tables;
USE HumanFriends;
DELETE FROM Camels;
CREATE TABLE HorsesDonkeys AS
SELECT * FROM Horses
UNION ALL
SELECT * FROM Donkeys;
SELECT * FROM HorsesDonkeys;

CREATE TABLE AnimalsYoung AS
SELECT 
    h.id,
    h.name,
    h.birthDate,
    TIMESTAMPDIFF(MONTH, h.birthDate, CURDATE()) AS AgeInMonths
FROM HorsesDonkeys h
WHERE TIMESTAMPDIFF(MONTH, h.birthDate, CURDATE()) BETWEEN 12 AND 36;
SELECT * FROM AnimalsYoung;
drop table AnimalsYoung;
INSERT INTO HorsesDonkeys (name, birthDate, commands) VALUES
('Ham', '2023-02-28', 'Sit, Stop');
CREATE TABLE AnimalsYoung AS
SELECT 
    h.id,
    h.name,
    h.birthDate,
    TIMESTAMPDIFF(MONTH, h.birthDate, CURDATE()) AS AgeInMonths
FROM HorsesDonkeys h
WHERE TIMESTAMPDIFF(MONTH, h.birthDate, CURDATE()) BETWEEN 12 AND 36;
SELECT * FROM AnimalsYoung;

CREATE TABLE AllAnimals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Type VARCHAR(50),
    name VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    commands VARCHAR(200),
    AgeInMonths INT
);

INSERT INTO AllAnimals (name, birthDate, commands, Type)
SELECT name, birthDate, commands, 'Cats' FROM Cats;

INSERT INTO AllAnimals (name, birthDate, commands, Type)
SELECT name, birthDate, commands, 'Dogs' FROM Dogs;

INSERT INTO AllAnimals (name, birthDate, commands, Type)
SELECT name, birthDate, commands, 'Hamsters' FROM Hamsters;

INSERT INTO AllAnimals (name, birthDate, commands, Type)
SELECT name, birthDate, commands, 'Horses' FROM Horses;

INSERT INTO AllAnimals (name, birthDate, commands, Type)
SELECT name, birthDate, commands, 'Donkeys' FROM Donkeys;

INSERT INTO AllAnimals (name, birthDate, commands, Type)
SELECT name, birthDate, commands, 'HorsesDonkeys' FROM HorsesDonkeys;

INSERT INTO AllAnimals (name, birthDate, AgeInMonths, Type)
SELECT name, birthDate, AgeInMonths, 'Animals' FROM AnimalsYoung;

SELECT * FROM AllAnimals;



