const rentCar = require('./rentCar.js')
const { expect } = require('chai');

describe('Tests', () => {

    describe('serachcar',()=>{

  
    it('finds one cars',()=>{
        const shop = ['a','b','c']
        const model = 'a'
        const result = rentCar.searchCar(shop,model)
        expect(result).to.equal('There is 1 car of model a in the catalog!')

    })
    it('finds two cars',()=>{
        const shop = ['a','b','a']
        const model = 'a'
        const result = rentCar.searchCar(shop,model)
        expect(result).to.equal('There is 2 car of model a in the catalog!')
    })
    it('invalid  number',()=>{
        expect(()=>{
            rentCar.searchCar('abc', 'a');
            .to.throw
        })
    })
    it('invalid shop',()=>{

    })
    it('invalid model',()=>{

    })
    it('car not found',()=>{

    })
    it('finds cars',()=>{

    })
})
describe('calcprice', ()=>{
    it('invalid model', ()=>{
        expect(()=>{
            rentCar.calculatePriceOfCar(1,1);
        }).to.throw();
    })
    it('invalid days', ()=>{
        
    })
    it('correct price for model', ()=>{
        
    })
    it('model not found', ()=>{
        expect(()=>{
            rentCar.calculatePriceOfCar('a',1);
        }).to.throw();
    })
})

})