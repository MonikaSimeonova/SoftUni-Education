function mirrorWords(input) {

    let objectOfValidWords = {};
    let counter = 0
    let line = input.shift()
    let pattern = /(@{1}|#{1})(?<name>[A-Za-z]{3,})\1{2}(?<nameTwo>[A-Za-z]{3,})\1/g;

    let matchesWords = line.matchAll(pattern);
    for (const word of matchesWords) {
        let words = word[0];
        let firstWord = word.groups.name
        let secondWord = word.groups.nameTwo
        counter++
        firstWord = firstWord.split('');
        let reversed = firstWord.reverse().join('');

        if (reversed == secondWord) {
            firstWord = firstWord.reverse().join('')
            objectOfValidWords[firstWord] = secondWord;
        }

    }
    if (counter == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (Object.keys(objectOfValidWords).length === 0) {
        console.log('No mirror words!');

    } else {
        let res = [];
        let wordsToPrint = Object.entries(objectOfValidWords)
        for (const [first, second] of wordsToPrint) {
            res.push(`${first} <=> ${second}`);
        }
        console.log('The mirror words are:');
        console.log(res.join(', '));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )