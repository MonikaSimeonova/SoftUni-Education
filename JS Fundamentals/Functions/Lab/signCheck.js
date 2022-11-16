function singCheck(num1, num2, num3) {

    let negative = 0
    let positive = 0
    if (num1 < 0) {
        negative++
    } else if (num1 > 0) {
        positive++
    }
    if (num2 < 0) {
        negative++
    } else if (num2 > 0) {
        positive++
    }
    if (num3 < 0) {
        negative++
    } else if (num3 > 0) {
        positive++
    }

    if (positive === 3) {
        console.log('Positive');
    } else if (negative === 3) {
        console.log('Negative');
    } else if (positive < negative) {
        console.log('Positive');
    } else if (positive > negative) {
        console.log('Negative');
    }
}
singCheck(-1,

    -2,

    -3)