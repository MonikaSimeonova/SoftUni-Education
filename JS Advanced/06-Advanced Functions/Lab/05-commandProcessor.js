function createProcesson() {
    let string = '';

    function append(str) {
        string += str;
    }
    function print() {
        console.log(string);
    }

    function removeStart(n){
        string = string.slice(n);
    }
    function removeEnd(n){
        string = string.slice(0,-n)
    }
    return {
        append,
        print,
        removeEnd,
        removeStart
    }
}
const myProc = createProcesson()

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();