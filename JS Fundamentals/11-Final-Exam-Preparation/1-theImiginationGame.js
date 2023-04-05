function imaginationGame(input) {

    let message = input.shift()
    message = message.toString().split('')
    
    let command = input.shift();
    while (command !== 'Decode') {
        let command1 = command.split('|');

        if (command1[0] == 'ChangeAll') {
            let replaceLet = command1[1];
            let newLet = command1[2];
            message = message.toString().split(',').join('');
            for (let letterInMessage of message) {
                if(letterInMessage == replaceLet){
                    message = message.replace(replaceLet,newLet);
                }
            }
            message = message.split('');

        } else if (command1[0] == 'Insert') {
            let index = Number(command1[1]);
            let value = command1[2];
            message = message.toString().split(',').join('');
            message = message.substring(0,index) + value + message.substring(index);
            message = message.split('');

        } else if (command1[0] == 'Move') {
            let numbers = Number(command1[1]);
            let letters = message.splice(0,numbers);
            for (const lete of letters) {
                message.push(lete)
            }
           
        }

        command = input.shift();
    }
    console.log(`The decrypted message is: ${message.join('')}`);
}
imaginationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )