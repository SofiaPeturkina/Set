import Character from "../character";
import Team from "../team";

test("should add member to team", () => {
  const bowman = new Character("Лучник");
  const team = new Team();
  team.add(bowman);

  expect(team.members.has(bowman)).toBe(true);
});

test("can`t add the same member more than once", () => {
  const bowman = new Character("Лучник");
  const team = new Team();
  team.add(bowman);

  expect(() => team.add(bowman)).toThrow(new Error("Ошибка! Этот персонаж уже в команде!"));
});

test("should add several members to team", () => {
  const bowman = new Character("Лучник");
  const swordsman = new Character("Мечник");
  const magician = new Character("Маг");
  const daemon = new Character("Демон");
  const undead = new Character("Вампир");
  const zombie = new Character("Зомби");
  const team = new Team();
  team.addAll(bowman, swordsman, magician, daemon, undead, zombie);

  expect(team.members).toEqual(new Set([bowman, swordsman, magician, daemon, undead, zombie]));
});

test("should make array", () => {
  const bowman = new Character("Лучник");
  const swordsman = new Character("Мечник");
  const magician = new Character("Маг");
  const daemon = new Character("Демон");
  const undead = new Character("Вампир");
  const zombie = new Character("Зомби");
  const team = new Team();
  team.addAll(bowman, swordsman, magician, daemon, undead, zombie);
  const result = team.toArray();
  const expected = [bowman, swordsman, magician, daemon, undead, zombie];

  expect(result).toEqual(expected);
});
