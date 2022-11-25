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