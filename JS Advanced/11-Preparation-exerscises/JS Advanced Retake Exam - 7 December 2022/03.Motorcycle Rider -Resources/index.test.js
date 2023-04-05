// const motorcycleRider = require('./Motorcycle Rider.js');
// const { assert, expect } = require('chai');

// describe('licenseRestriction', () => {
//     describe('license', () => {
//         it('test with AM', () => {
//             assert(motorcycleRider.licenseRestriction('AM'),
//             'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
//         });
//         it('test with A1', () => {
//             assert(motorcycleRider.licenseRestriction('A1'), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
//         })
//         it('test with A2', () => {
//             assert(motorcycleRider.licenseRestriction('A2'), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.')
//         })
//         it('test with A', () => {
//             expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
//         })
//         it('test with invalid info', () => {
//             assert.throw(() => motorcycleRider.licenseRestriction('k'), 'Invalid Information!')
//         })
//     })
//     describe('motorsicleShowRoom', () => {
//         it('test with invalid arr', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom('k', 1), 'Invalid Information!')
//         })
//         it('test with invalid arr', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom(1, 1), 'Invalid Information!')
//         })
//         it('test with invalid obj', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom({}, 1), 'Invalid Information!')
//         })
//         it('test with invalid number', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom([1, 2], 'k'), 'Invalid Information!')
//         })
//         it('test with invalid number', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom(['50','100'], 49), 'Invalid Information!')
//         })
//         it('test with invalid number', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom([], 45), 'Invalid Information!')
//         })
//         it('test with invalid number and arr', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom('k', 'kkk'), 'Invalid Information!')
//         })
//         it('test with invalid number and empty arr', () => {
//             assert.throw(() => motorcycleRider.motorcycleShowroom([], 1), 'Invalid Information!')
//         })
//         it('test with valid input', () => {
//             expect(motorcycleRider.motorcycleShowroom([55, 56], 50).equal('There are 2 available '))
//         })
//         it('test with valid input with 3', () => {
//             assert(motorcycleRider.motorcycleShowroom([55, 56, 45], 50), 'There are 2 available motorcycles matching your criteria!')
//         })
//         it('test with valid input with 3', () => {
//             assert(motorcycleRider.motorcycleShowroom(['55', '50', '45'], 50), 'There are 2 available motorcycles matching your criteria!')
//         })
//         it('test with valid input with 3', () => {
//             assert(motorcycleRider.motorcycleShowroom(['55', '50', '45'], 51), 'There are 1 available motorcycles matching your criteria!')
//         })
//     })

//     describe('otherSpending', () => {
//         it('first param is not arr', () => {
//             assert.throw(() => motorcycleRider.otherSpendings('p', [50], true), 'Invalid Information!')
//         })
//         it('first param is not arr', () => {
//             assert.throw(() => motorcycleRider.otherSpendings(1, [50], true), 'Invalid Information!')
//         })
//         it('first param is not arr', () => {
//             assert.throw(() => motorcycleRider.otherSpendings([1], 1, true), 'Invalid Information!')
//         })
//         it('first param is not arr', () => {
//             assert.throw(() => motorcycleRider.otherSpendings([1], [1], 1), 'Invalid Information!')
//         })
//         it('second param is not arr', () => {
//             assert.throw(() => motorcycleRider.otherSpendings([50], 50, true), 'Invalid Information!')
//         })
//         it('3rth param is not boolenan', () => {
//             assert.throw(() => motorcycleRider.otherSpendings(['p'], [50], 5), 'Invalid Information!')
//         })
//         it('all param is not corenct', () => {
//             assert.throw(() => motorcycleRider.otherSpendings(1, 5, 1), 'Invalid Information!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['helmet', 'jacket'], ['engine oil', 'oil filter'], false),'You spend $600.00 for equipment and consumables!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['helmet', 'jacket',], ['engine oil', 'oil filter'], true),'You spend $540.00 for equipment and consumables with 10% discount!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false),'You spend $270.00 for equipment and consumables!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true),'You spend $243.00 for equipment and consumables with 10% discount!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['gloves'], ['engine oil'], true),'You spend $63.00 for equipment and consumables with 10% discount!`')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['helmet'], ['gloves'], true),'You spend $180.00 for equipment and consumables with 10% discount!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['jacket'], ['oil filter'], true),'You spend $207.00 for equipment and consumables with 10% discount!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['jacket','jacket'], ['oil filter'], true),'You spend $387.00 for equipment and consumables with 10% discount!')
//         })
//         it('test with valid input', () => {
//             assert(motorcycleRider.otherSpendings(['j'], ['j'], true),'You spend $0.00 for equipment and consumables with 10% discount!`')
//         })
//     })

// })