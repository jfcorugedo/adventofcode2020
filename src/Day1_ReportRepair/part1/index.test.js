const repair = require('./index');
const {sample, answer} = require('./sample');

test('SAMPLE: given the sample dataset the function works with it', () => {
    expect(repair(sample)).toBe(answer);
});