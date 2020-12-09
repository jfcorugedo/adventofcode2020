const repair = require('./index');
const {sample, answer: sampleAnswer} = require('./sample');
const {dataset, answerPart1} = require('../input');

describe('Part1', () => {
    test('SAMPLE: given the sample dataset the function works with it', () => {
        expect(repair(sample)).toBe(sampleAnswer);
    });

    test('REAL: given the real expense report the function can find the two numbers', () => {
        expect(repair(dataset)).toBe(answerPart1);
    });
});