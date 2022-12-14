function oddNumbers(numbers) {

    let result = numbers.filter((x, i) => (i + 1) % 2 === 0).map(x => x * 2).reverse();
    console.log(result.join(' '));
}

oddNumbers([10, 15, 20, 25])