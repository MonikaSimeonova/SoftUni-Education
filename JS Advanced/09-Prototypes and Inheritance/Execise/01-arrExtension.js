(function solve(){
    //last function
    Array.prototype.last = function(){
        return [this.length - 1];
    }
    //skip function
    Array.prototype.skip = function(n){
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
            
        }
        return result;
    }
    //take function

    Array.prototype.take = function(n){
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
            
        }
        return result;
    }
    //sum function
    Array.prototype.sum = function(){
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i]
            
        }
        return sum;
    }

    //average function

    Array.prototype.average = function(){
        return this.sum() / this.length
    }
})();
let arr = [1,2,3,4]
console.log(arr.last());
console.log(arr.average());
console.log(arr.sum());
console.log(arr.skip(1));

