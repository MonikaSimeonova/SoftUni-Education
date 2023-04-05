const {assert} = require("chai");
const mathEnforcer = require("./04-mathEnforser")


describe("mathEnforcer", ()=>{
    it("return undefiend if param is not a number",()=>{
        assert.equal(mathEnforcer.addFive("a"), undefined)
    })
    it("return undefiend if without param ",()=>{
        assert.equal(mathEnforcer.addFive(), undefined)
    })
    it("return positive num  if param is 5 ",()=>{
        assert.equal(mathEnforcer.addFive(5), 10)
    })
    it("return 8.14 if param is 3.14 ",()=>{
        assert.equal(mathEnforcer.addFive(3.14), 8.14)
    })
    it("return 5.99 if param is 0.99 ",()=>{
        assert.equal(mathEnforcer.addFive(3.14), 8.14)
    })
    it("return -5.99 if param is -10.99 ",()=>{
        assert.equal(mathEnforcer.addFive(3.14), 8.14)
    })
    it("return 0 if param is -5 ",()=>{
        assert.equal(mathEnforcer.addFive(3.14), 8.14)
    })
})

describe('subtractTen function', ()=> {
    it('should return undefined it param is not a number', ()=> {
        assert.equal(mathEnforcer.subtractTen('a'), undefined)
    })
    it('should return undefined it no param is passed', ()=> {
        assert.equal(mathEnforcer.subtractTen(), undefined)
    })
    it('should return positive number 5 if param is 15', ()=> {
        assert.equal(mathEnforcer.subtractTen(5), 15)
    })
    it('should return floating point num -8.9 if param is 1.1', ()=> {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
    })
    it('should return floating if param is 0.99', ()=> {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
    })
    it('should return floating number if param is 6.86', ()=> {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
    })
    it('should return 0', ()=> {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
    })
    it('should return -10', ()=> {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
    })
    it('should return floating num if param is -0.99', ()=> {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
    })
})

describe('sum function', () =>{
    it('should return undefined of first param is not a number', ()=>{
        assert.equal(mathEnforcer.sum('a', 5), undefined)
    })
    it('should return undefined of second param is not a number', ()=>{
        assert.equal(mathEnforcer.sum(5, 'a'), undefined)
    })
    it('should return undefined if no params are passed', ()=>{
        assert.equal(mathEnforcer.sum(), undefined)
    })
    it('should return 10 if two params are positive numbers', ()=>{
        assert.equal(mathEnforcer.sum(5, 5), 10)
    })
    it('should return negative number', ()=>{
        assert.equal(mathEnforcer.sum(-5, -5), -10)
    })
    it('should return floating point number with -5 + 3.21', () =>{
        assert.equal(mathEnforcer.sum(-5, 3.1), -1.9, 0.01)
    })
    it('should return floating point number with -5 + 3.22', () =>{
        assert.equal(mathEnforcer.sum(-5, 3.22), -1.9, 0.01)
    })
})