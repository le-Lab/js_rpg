let name = prompt("Quel est le nom de ce personnage ?");
let gender = prompt("Quel est le genre de ce personnage ? ");
let race = prompt("Quel est sa race ? (Humain, Elfe, Nain, demi-homme)");
let characterRole = prompt("Quelle est la classe de ce personnage? (Guerrier, Ranger, Voleur)");

const mainHero = new Hero(name, 10, gender, race, characterRole);

checkRace(mainHero, mainHero.race)
checkRace(mainHero, mainHero.characterRole)

console.log(mainHero);
