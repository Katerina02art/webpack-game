import gameLogic from '../js/gameLogic.js';

describe('gameLogic', () => {
  test('should return "victory" when score >= 100', () => {
    expect(gameLogic(100)).toBe('victory');
    expect(gameLogic(150)).toBe('victory');
  });

  test('should return "good" when score between 50 and 99', () => {
    expect(gameLogic(50)).toBe('good');
    expect(gameLogic(75)).toBe('good');
    expect(gameLogic(99)).toBe('good');
  });

  test('should return "normal" when score between 20 and 49', () => {
    expect(gameLogic(20)).toBe('normal');
    expect(gameLogic(35)).toBe('normal');
    expect(gameLogic(49)).toBe('normal');
  });

  test('should return "defeat" when score < 20', () => {
    expect(gameLogic(0)).toBe('defeat');
    expect(gameLogic(10)).toBe('defeat');
    expect(gameLogic(19)).toBe('defeat');
  });
});
