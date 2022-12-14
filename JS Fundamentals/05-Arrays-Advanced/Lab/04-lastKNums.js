function generate(length, k){

    let sequence = [1];

    for (let i = 1; i < length; i++){
        let index = Math.max(sequence.length - k, 0);

        let lastElements = sequence.slice(index);
        let sum = 0;

        for (const element of lastElements) {
            sum += element;
        }

        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}

generate(6, 3)