const chooseYourCar = require('./chooseYourCar.js');
const { expect } = require('chai');


describe('tests', () => {
    describe('choosingType', ()=>{
        it('year below 1900 and more that 2022',()=>{
            expect(()=>chooseYourCar.choosingType('type', 'color', 1899)).throw()
            expect(()=>chooseYourCar.choosingType('type', 'color', 2023)).throw()
        })
        it('type sedan year 2010',()=>{
            expect(chooseYourCar.choosingType('Sedan', 'color', 2010)).to.equal('This color Sedan meets the requirements, that you have.')
        })
        it('type sedan year 2011',()=>{
            expect(chooseYourCar.choosingType('Sedan', 'color', 2011)).to.equal('This color Sedan meets the requirements, that you have.')
        })
        it('type sedan year 2009',()=>{
            expect(chooseYourCar.choosingType('Sedan', 'color', 2009)).to.equal('This Sedan is too old for you, especially with that color color.')
        })
        it('type is not sedan',()=>{
            expect(()=>chooseYourCar.choosingType('type', 'color', 2015)).throw()
            expect(()=>chooseYourCar.choosingType('type', 'color', 2010)).throw()
        })
    })

    describe('brandName',()=>{
        it('brand is a num and string',()=>{
            expect(()=>chooseYourCar.brandName('k',1)).to.throw()
            expect(()=>chooseYourCar.brandName(1,1)).to.throw()
        })
        it('number is not a num',()=>{
            expect(()=>chooseYourCar.brandName([1,2],'6')).to.throw()
            expect(()=>chooseYourCar.brandName([1,2],'li')).to.throw()
        })
        it('number is < 0 and index >= lenght brands ',()=>{
            expect(()=>chooseYourCar.brandName([1,2],-1)).to.throw()
            expect(()=>chooseYourCar.brandName([1,2],2)).to.throw()
            expect(()=>chooseYourCar.brandName([1,2],3)).to.throw()
        })
        it('corect input', ()=>{
            expect(chooseYourCar.brandName([1,2], 1)).to.equal('1')
            expect(chooseYourCar.brandName(['me','you','them'], 1)).to.equal('me, them')
            expect(chooseYourCar.brandName(['me','you','them'], 2)).to.equal('me, you')

        })


    })

    describe('carFuelConsumption',()=>{
        it('distance not a num and below 0',()=>{
            expect(()=>chooseYourCar.carFuelConsumption('k',1)).to.throw()
            expect(()=>chooseYourCar.carFuelConsumption(-1,1)).to.throw()
        })
        it('consumptedFuelInLiters  not a num and below 0',()=>{
            expect(()=>chooseYourCar.carFuelConsumption('k',1)).to.throw()
            expect(()=>chooseYourCar.carFuelConsumption(-1,1)).to.throw()
        })
        it('corect input liters > 7', ()=>{
            expect(chooseYourCar.carFuelConsumption(50,100)).to.equal('The car burns too much fuel - 200.00 liters!')
            expect(chooseYourCar.carFuelConsumption(100,50)).to.equal('The car burns too much fuel - 50.00 liters!')
            expect(chooseYourCar.carFuelConsumption(50, 50)).to.equal('The car burns too much fuel - 100.00 liters!')

        })
        it('corect input <= 7', ()=>{
            expect(chooseYourCar.carFuelConsumption(200,10)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.')
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')

        })

    })
});