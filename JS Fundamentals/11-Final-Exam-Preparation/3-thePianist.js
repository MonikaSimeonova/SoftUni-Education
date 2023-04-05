function music(input) {

    let numOfPieces = Number(input.shift());
    let piecesObj = {};

    for (i = 0; i < numOfPieces; i++) {
        let line = input.shift();
        let [piece, composer, key] = line.split('|');

        piecesObj[piece] = {
            composer: composer,
            key: key,
        }

    }
    let nextLine = input.shift();

    while (nextLine !== 'Stop') {
        let nextLineSplit = nextLine.split('|');
        let command = nextLineSplit[0];

        if (command == 'Add') {
            let pieceToAdd = nextLineSplit[1];
            let composerOfThePiece = nextLineSplit[2];
            let keyOfThePiece = nextLineSplit[3];
            if (!piecesObj.hasOwnProperty(pieceToAdd)) {
                piecesObj[pieceToAdd] = {
                    composer: composerOfThePiece,
                    key: keyOfThePiece,
                }
                console.log(`${pieceToAdd} by ${composerOfThePiece} in ${keyOfThePiece} added to the collection!`);
            } else {
                console.log(`${pieceToAdd} is already in the collection!`);
            }
        } else if (command == 'Remove') {
            let pieceToRemove = nextLineSplit[1];
            if (piecesObj.hasOwnProperty(pieceToRemove)) {
                delete piecesObj[pieceToRemove];
                console.log(`Successfully removed ${pieceToRemove}!`);
            } else {
                console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            let oldKey = nextLineSplit[1];
            let newKey = nextLineSplit[2];
            if (piecesObj.hasOwnProperty(oldKey)) {
                piecesObj[oldKey].key = newKey;
                console.log(`Changed the key of ${oldKey} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${oldKey} does not exist in the collection.`);
            }
        }
        nextLine = input.shift();
    }
    let resultToPrint = Object.entries(piecesObj);

    for (const [name, info] of resultToPrint) {
        console.log(`${name} -> Composer: ${info.composer}, Key: ${info.key}`);
    }



}
music([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])