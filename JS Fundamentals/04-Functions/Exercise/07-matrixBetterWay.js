function matrix(num) {

    let rowGenerator = () => {
        let singleRow = ''
        for (let k = 1; k <= num; k++) {
            singleRow += `${num} `
        }

        return singleRow;

    }

    for (let i = 1; i <= num; i++) {
        console.log(rowGenerator());
    }

}
matrix(3)

/*Write a function that receives a single integer number n and prints nxn matrix with that number. */