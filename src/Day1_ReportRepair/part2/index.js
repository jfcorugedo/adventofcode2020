/**
 * URL: https://adventofcode.com/2020/day/1
 *
 The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation.
 They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

 Using the above example again, the three entries that sum to 2020 are 979, 366, and 675.
 Multiplying them together produces the answer, 241861950.

 In your expense report, what is the product of the three entries that sum to 2020?
 */

const repair = require('../part1/index');

function repairV2(report) {

    const target = 2020;

    const result = report
        .split('\n')
        .filter(n => n !== '')
        .map(n => Number(n))
        .reduce( (resultFound, first, index, collection) => {
            if(resultFound) return resultFound;

            const collectionWithoutCurrent = [...collection.slice(0, index), ...collection.slice(index+1)];

            return collectionWithoutCurrent.reduce( (subResultFound, second, subIndex, partialCollection) => {
                if(subResultFound) return subResultFound;

                const third = partialCollection.slice(subIndex + 1).find( next => (first + second + next) === target  );
                if(third) {
                    return {first, second, third};
                }
            }, undefined );
        }, undefined );

    console.log('result', result);
    return result.first * result.second * result.third;
}

module.exports = repairV2;