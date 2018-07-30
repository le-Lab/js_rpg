class BaseCharacter {
  constructor(name, health) {
    this.name = name;
    this.maxhealth = health;
    this.currentHealth = health;
    this.barriers = {
      attack: 10,
      sneak: 10,
      persuade: 10
    };
    this.skills = {
      attack: 0,
      sneak: 0,
      persuade: 0
    };
  }
}
class Hero extends BaseCharacter {
  constructor(name, health, gender, race, role) {
    super(name, health);
    this.gender = gender;
    this.race = race;
    this.characterRole = role;
    this.isIncapacited = false;
    this.equipedWeapon = {
      name: `None`,
      minDamage: null,
      maxDamage: null
    };
    this.equipedArmor = {
      name: `None`,
      hitBarrierBonus: null
    };
  }
}

const checkClass = (hero, characterClass) => {
  let lowerCharacterClass = characterClass.toLowerCase();

  switch (lowerCharacterClass) {
    case `guerrier`:
      hero.skills.attack += 3;
      hero.skills.sneak--;
      break;
    case `ranger`:
      hero.skills.attack++;
      hero.skills.persuade++;
      hero.skills.sneak++;
      break;
    case `voleur`:
      hero.skills.sneak += 3;
      hero.skills.attack--;
      break;
    default:
      characterClass = prompt(
        `"${characterClass}" n'est pas une classe valide. Veuillez choisir une autre classe`
      );
      hero.characterRole = characterClass;
      checkClass(hero, characterClass);
      break;
  }
};

const checkRace = (hero, race) => {
  let lowerCaseRace = race.toLowerCase();

  switch (lowerCaseRace) {
    case `human`:
    // TODO: faire humain
      break;
    case `elfe`:
      hero.skills.persuade++;
      hero.barriers.persuade++;
      hero.skills.attack--;
      hero.barriers.sneak--;
      break;
    case `nain`:
      hero.skills.attack++;
      hero.barriers.attack++;
      hero.skills.sneak--;
      hero.barriers.persuade--;
      break;
    case `demi-homme`:
      hero.skills.sneak++;
      hero.barriers.sneak++;
      hero.skills.attack--;
      hero.barriers.persuade--;
      break;
    default:
      race = prompt(
        `${race} n'est pas une race valide. Veuillez choisir une nouvelle race`
      );
      hero.race = race;
      checkRace(hero, race);
      break;
  }
};
