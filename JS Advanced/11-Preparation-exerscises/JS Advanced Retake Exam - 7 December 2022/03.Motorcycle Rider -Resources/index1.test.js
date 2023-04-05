const motorcycleRider = require('./Motorcycle Rider.js');
const { expect } = require('chai');

describe('test', ()=>{

    describe('licenseRestriction', ()=>{
        it('AM', ()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        })
        it('A1', ()=>{
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })
        it('A2', ()=>{
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        })
        it('A', ()=>{
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        })
        it('invalid', ()=>{
            expect(()=> motorcycleRider.licenseRestriction('k')).to.throw()
        })
    })

    describe('motorcycleShowroom', ()=>{
        it('invalid first param', ()=>{
            expect(()=> motorcycleRider.motorcycleShowroom('k', 1)).to.throw()
            expect(()=> motorcycleRider.motorcycleShowroom(1, 1)).to.throw()
            expect(()=> motorcycleRider.motorcycleShowroom([], 1)).to.throw()
        })
        it('invalid second param', ()=>{
            expect(()=> motorcycleRider.motorcycleShowroom([1,2], [1])).to.throw()
            expect(()=> motorcycleRider.motorcycleShowroom([1,2], 'k')).to.throw()
            expect(()=> motorcycleRider.motorcycleShowroom([1,2], '2')).to.throw()
        })
        it('invalid arr lenght and max volume', ()=>{
            expect(()=> motorcycleRider.motorcycleShowroom([], 1)).to.throw()
            expect(()=> motorcycleRider.motorcycleShowroom([1,2], 49)).to.throw()
        })
        it('engine <= maxVolume', ()=>{
            expect(motorcycleRider.motorcycleShowroom([55, 56], 56)).to.equal('There are 2 available motorcycles matching your criteria!')
        })
        it('engine >= 50', ()=>{
            expect(motorcycleRider.motorcycleShowroom([55, 56], 50)).to.equal('There are 0 available motorcycles matching your criteria!')
        })
        it('engine >= 50', ()=>{
            expect(motorcycleRider.motorcycleShowroom([50, 56], 51)).to.equal('There are 1 available motorcycles matching your criteria!')
        })
        
    })

    describe('otherSpendings', ()=>{
        it('equipment not arr', ()=>{
            expect(()=>motorcycleRider.otherSpendings(1,[1,2], true)).to.throw()
        })
        it('consumables not arr', ()=>{
            expect(()=>motorcycleRider.otherSpendings([1],1, true)).to.throw()
        })
        it('discount not boolean', ()=>{
            expect(()=>motorcycleRider.otherSpendings([1],[1],1)).to.throw()
        })
        it('all invalid', ()=>{
            expect(()=>motorcycleRider.otherSpendings(1,1,1)).to.throw()
        })
        it('with discount', ()=>{
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ["engine oil","oil filter"], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!')
        })
        it('without discount', ()=>{
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ["engine oil","oil filter"], false)).to.equal('You spend $600.00 for equipment and consumables!')
        })
        it('with discount', ()=>{
            expect(motorcycleRider.otherSpendings(['helmet'], ["engine oil"], true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!')
        })
    })
})