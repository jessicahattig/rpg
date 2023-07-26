import {Rpg} from '../src/js/rpg.js';

describe ("Rpg", () => {

test('Character should be create with correct attributets', () => {
  const warrior = new Character("Arthur", "Knight", 20, 15, {});
      expect(warrior.name).toBe("Arthur");
      expect(warrior.type).toBe("Knight");
      expect(warrior.strength).toBe(20);
      expect(warrior.intelligence).toBe(15);
  });
});