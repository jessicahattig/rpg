import { Character } from '../src/js/character.js';

describe("Character creation", () => {

test('Character should be create with correct attributets', () => {
  const warrior = new Character("Arthur", "Knight", 20, 15, {});
      expect(warrior.name).toBe("Arthur");
      expect(warrior.type).toBe("Knight");
      expect(warrior.strength).toBe(20);
      expect(warrior.intelligence).toBe(15);
      expect(warrior.level).toBe(1);
      expect(warrior.experience).toBe(0);
      expect(warrior.inventory).toEqual([]);
  });
});