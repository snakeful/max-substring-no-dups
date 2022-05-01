const maxSubsNoDups = require('../src/index');

describe('max substring no dups', () => {

  it('various test', () => {
    expect(maxSubsNoDups('')).toBe(0);
    expect(maxSubsNoDups('x')).toBe(1);
    expect(maxSubsNoDups('abcabcbb')).toBe(3);
    expect(maxSubsNoDups('bbbbbbb')).toBe(1);
    expect(maxSubsNoDups('pwwkew')).toBe(3);
    expect(maxSubsNoDups('abrexrzx')).toBe(5);
    expect(maxSubsNoDups('abrexrzxypnxt')).toBe(6);
    expect(maxSubsNoDups('abrexrzxypnft')).toBe(8);
  });
});