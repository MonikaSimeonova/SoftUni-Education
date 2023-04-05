const carService = require('./03. Car Service_Resources')
const {expect} = require('chai')

describe('test', ()=>{
    describe('isItExpensive',()=>{
        it('correct', ()=>{
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`)
        })
        it('else', ()=>{
            expect(carService.isItExpensive('a')).to.equal(`The overall price will be a bit cheaper`)
        })
    })
    describe('discount',()=>{
        it('invalid',()=>{
            expect(()=>carService.discount('p', 1)).throw()
            expect(()=>carService.discount(1, 'p')).throw()
        })
        it('>2 or <= 7', ()=>{
            expect(carService.discount(7,10)).to.equal(`Discount applied! You saved 1.5$`)
            expect(carService.discount(3,10)).to.equal(`Discount applied! You saved 1.5$`)
            
        })
        it('<= 2',()=>{
            expect(carService.discount(2,10)).to.equal(`You cannot apply a discount`)
            expect(carService.discount(0,10)).to.equal(`You cannot apply a discount`)
            expect(carService.discount(1,10)).to.equal(`You cannot apply a discount`)

        })
    })

    describe('partsToBuy', ()=>{
        it('',()=>{
            expect(()=>carService.partsToBuy(1,[1])).to.throw()
            expect(()=>carService.partsToBuy(1,1)).to.throw()
            expect(()=>carService.partsToBuy("1",1)).to.throw()
            expect(()=>carService.partsToBuy([1],1)).to.throw()
        })
        it('corect', ()=>{
            
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["coil springs"])).equal(230)
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["coil springs","blowoff valve"])).equal(375)

        })
    })


})
