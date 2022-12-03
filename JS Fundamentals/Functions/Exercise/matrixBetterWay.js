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