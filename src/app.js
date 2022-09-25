import Character from "./character";
import Team from "./team";

console.log('app worked');

const bowman = new Character("Лучник");
const swordsman = new Character("Мечник");
const magician = new Character("Маг");
const daemon = new Character("Демон");
const undead = new Character("Вампир");
const zombie = new Character("Зомби");
const team = new Team();

team.add(bowman);

console.log(team.members.has(bowman));

team.addAll(bowman, swordsman, magician, daemon, undead, zombie);

console.log(team.members);
console.log(team.toArray());
