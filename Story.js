let name = prompt("Quel est le nom de ce personnage ?");
let gender = prompt("Quel est le genre de ce personnage ? ");
let race = prompt("Quel est sa race ? (Humain, Elfe, Nain, demi-homme)");
let characterRole = prompt(
  "Quelle est la classe de ce personnage? (Guerrier, Ranger, Voleur)"
);

const mainHero = new Hero(name, 10, gender, race, characterRole);

checkRace(mainHero, mainHero.race);
checkRace(mainHero, mainHero.characterRole);

console.log(
  `` // TODO: ecrire l'histoire des personnages.
);

mainHero.equipedWeapon({
  name: prompt(`Quelle arme choississez-vous ? (Epée, Bâton, Dague, Arc)`),
  minDamage: 1,
  maxDamage: 6
});

console.log(
  `` // TODO: histoire des armes.
);
mainHero.equipedArmor({
  name: `Bob`,
  attackBarrierBonus: 3
});

console.log(
  `` // TODO: histoire des equipements.
);
