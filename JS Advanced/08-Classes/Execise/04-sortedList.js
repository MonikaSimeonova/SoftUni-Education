class List{

    constructor(){
        this.arr = [];
        this.size = this.arr.length;
    }

    add(element){
        this.arr.push(element);
        this.arr = this.arr.sort((a,b)=> a-b); // sort
        this.size = this.arr.length; // update the length
    }

    remove(index){
        if(index >= 0 && index < this.arr.length){
            this.arr.splice(index,1);
            this.arr = this.arr.sort((a,b)=> a-b);// sort
            this.size = this.arr.length;// update the length
        }else{
            throw new Error('Invalid index');
        }
    }

    get(index){
        if(index >= 0 && index < this.arr.length){
            return this.arr[index];
        }else{
            throw new Error('Invalid index');
        }
    }

    size(){
        return this.arr.length;// update the length
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1)); 


//with private methods

class List {
    constructor() {
      this.arr = [];
      this.size = this.arr.length;
    }
   
    #sortArray(arr) {
      return arr.sort((a, b) => a - b);
    }
   
    #arrayLength(arr) {
      return arr.length;
    }
   
    #isIndexValid(index, arr) {
      return index >= 0 && index < arr.length;
    }
   
    #throwError() {
      throw new Error("Invalid index!");
    }
   
    add(element) {
      this.arr.push(element);
      this.arr = this.#sortArray(this.arr);
      this.size = this.#arrayLength(this.arr);
    }
   
    remove(index) {
      if (this.#isIndexValid(index, this.arr)) {
        this.arr.splice(index, 1);
        this.arr = this.#sortArray(this.arr);
        this.size = this.#arrayLength(this.arr);
      } else {
        this.#throwError();
      }
    }
   
    get(index) {
      if (this.#isIndexValid(index, this.arr)) {
        return this.arr[index];
      }
      this.#throwError();
    }
   
    size() {
      return this.#arrayLength(this.arr);
    }
  }