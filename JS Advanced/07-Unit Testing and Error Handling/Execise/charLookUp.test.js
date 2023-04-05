const{assert}  = require("chai")
const lookupChar = require("./03-charLookup")

describe("lookUpCHar", ()=>{
    it("return undefiend if first arg is not a string",()=>{
        assert.equal(lookupChar(1,1), undefined)
    })
    it("return undefiend if second arg is not an int",()=>{
        assert.equal(lookupChar("string",1.5), undefined)
    })
    it("return undefiend if second arg is not correct",()=>{
        assert.equal(lookupChar("test","test"), undefined)
    })
    it("return incorect index if index  is lower than 0 ",()=>{
        assert.equal(lookupChar("test",-1), "Incorrect index")
    })
    it("return incorect index if index  is outside of the boundry of the array ",()=>{
        assert.equal(lookupChar("test",10), "Incorrect index")
    })
    it("return corredt character at index 0 ",()=>{
        assert.equal(lookupChar("test",0), "t")
    })
    it("return corredt character if the index is last of the lenght",()=>{
        assert.equal(lookupChar("test",3), "t")
    })
    it("return corredt character if the index is last of the lenght",()=>{
        assert.equal(lookupChar("test",2), "e")
    })
    it("return corredt character if the index is last of the lenght",()=>{
        assert.equal(lookupChar("test",4), "t")
    })
})