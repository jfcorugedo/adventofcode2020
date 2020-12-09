const repairV2 = require('./index');
const {sample, answer} = require('./sample');

test('SAMPLE: given the sample dataset the function works with it', () => {
    expect(repairV2(sample)).toBe(answer);
});