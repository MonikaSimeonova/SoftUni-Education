function emojiDetector(input) {

    let text = input.shift();
    let emojicount = 0;
    let coolEmojis = [];
    let threshold = 1; // and after that multiply all the digits

    let digitsResults = text.matchAll(/\d/g);

    for (const digitResult of digitsResults) {
        let digit = Number(digitResult[0]);
        threshold *= digit
    }

    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        emojicount++

        let emojiCoolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i);
        }

        if (emojiCoolness >= threshold) {
            coolEmojis.push(emoji);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojicount} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmojis) {
        console.log(emoji);
    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])