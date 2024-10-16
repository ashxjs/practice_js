const { encrypt, decrypt } = require("../caesarCipher");

describe("Caesar Cipher", () => {
  test('encrypts "HELLO WORLD" with key 3', () => {
    expect(encrypt("HELLO WORLD", 3)).toBe("KHOOR ZRUOG");
  });

  test('decrypts "KHOOR ZRUOG" with key -3', () => {
    expect(decrypt("KHOOR ZRUOG", -3)).toBe("HELLO WORLD");
  });

  test("encrypts alphabet with key 1", () => {
    expect(encrypt("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
      "bcdefghijklmnopqrstuvwxyza"
    );
  });

  test("decrypts shifted alphabet with key -1", () => {
    expect(decrypt("zyxwvutsrqponmlkjihgfedcba", -1)).toBe(
      "azyvutsrqponmlkjihgfedcb"
    );
  });

  test("handles empty string", () => {
    expect(encrypt("", 5)).toBe("");
    expect(decrypt("", 5)).toBe("");
  });

  test("handles non-alphabetic characters", () => {
    expect(encrypt("Hello, World! 123", 3)).toBe("Khoor, Zruog! 123");
  });

  test("wraps around alphabet correctly", () => {
    expect(encrypt("XYZ", 3)).toBe("ABC");
    expect(decrypt("ABC", -3)).toBe("XYZ");
  });
});
