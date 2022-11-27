function theImitationGameSecondSolution(arrInput) {

    let arr = arrInput.slice(); // copy
    let message = arr.shift();
    let tempMessage = '';
    let currentLine = arr.shift();

    while (currentLine !== 'Decode') {

        let tokens = currentLine.split('|');
        let command = tokens[0];

        switch (command) {
            case 'Move':
                let lettersNumber = Number(tokens[1]);
                let letterToMove = message.substring(0,lettersNumber);
                tempMessage = message.replace(letterToMove,'');
                tempMessage += letterToMove;
                message = tempMessage;
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];

                tempMessage = message.split('');
                tempMessage.splice(index,0,value);
                message = tempMessage.join('');
                break;

            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];

                // with regExp:
                // let res = new RegExp(`${substring}`, "g");
                // message = message.replace(res,replacement);
                while(message.includes(substring)){
                    tempMessage = message.replace(substring,replacement);
                    message = tempMessage;
                }
                
                break;
        }


        currentLine = arr.shift();

    }
    console.log(`The decrypted message is: ${message}`);

}
theImitationGameSecondSolution([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

// On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'
// •	"Move {number of letters}":
// o	Moves the first n letters to the back of the string
// •	"Insert {index} {value}":
// o	Inserts the given value before the given index in the string
// •	"ChangeAll {substring} {replacement}":
// o	Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// •	On the first line, you will receive a string with a message.
// •	On the following lines, you will be receiving commands, split by '|' .
// Output
// •	After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"
