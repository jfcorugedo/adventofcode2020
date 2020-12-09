const repairV2 = require('./index');
const {sample, answer} = require('./sample');
const {dataset, answerPart2} = require('../input');

describe('Part2', () => {
    test('SAMPLE: given the sample dataset the function works with it', () => {
        expect(repairV2(sample)).toBe(answer);
    });

    test('REAL: given the real expense report the function can find the three numbers', () => {
        expect(repairV2(dataset)).toBe(answerPart2);
    });
});