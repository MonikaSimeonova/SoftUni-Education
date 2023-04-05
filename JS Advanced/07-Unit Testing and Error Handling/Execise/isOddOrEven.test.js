const{assert}  = require("chai")
const isOddOrEven = require("./02-isOddOrEven")

describe("isOddOrEven", ()=>{
    it("return even when string length is even",()=>{
        assert.equal(isOddOrEven("even"), "even")
    })
    it("return odd when string length is odd",()=>{
        assert.equal(isOddOrEven("odd"), "odd")
    })
    it("return undefiend when input is not a sting",()=>{
        assert.equal(isOddOrEven(1), undefined)
    })
})