import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja1, Ninja2, Katana, Shuriken } from "./entities";

const myContainer = new Container();
// myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja1);
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja2);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };