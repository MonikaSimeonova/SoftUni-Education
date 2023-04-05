function secretChat(input) {
    let textMessage = input.shift();
    let nextLine = input.shift();

    while (nextLine !== 'Reveal') {
        let line = nextLine.split(":|:");
        let command = line[0];

        if (command == 'InsertSpace') {
            let index = Number(line[1]);
            textMessage = textMessage.substring(0, index) + ' ' + textMessage.substring(index);
            console.log(textMessage);

        } else if (command == 'Reverse') {
            let textSubst = line[1];
            if (textMessage.includes(textSubst)) {
                textMessage = textMessage.replace(textSubst,'');
                
                // let index = textMessage.indexOf(textSubst);
                // let res = '';
                // let lastIndex = 0;
                // for (let i = index; i < textMessage.length; i++) {
                //     let letter = textMessage[i]
                //     res += letter;
                //     if (res == textSubst) {
                //         lastIndex = i;
                //     }
                // }

                let cuttedWord = textSubst
                //textMessage = textMessage.substring(0, index) + textMessage.substring(lastIndex+1,);
                let cutArr = cuttedWord.split('');
                let reversed = cutArr.reverse().join('');
                textMessage = textMessage.substring(0,) + reversed;
                console.log(textMessage);


            } else {
                console.log('error');
            }
        } else if (command == 'ChangeAll') {
            let toChange = line[1];
            let changeWith = line[2];
            while(textMessage.includes(toChange)){
                textMessage = textMessage.replace(toChange,changeWith);
            }
            console.log(textMessage);
        }
        nextLine = input.shift();
    }

    console.log(`You have a new text message: ${textMessage}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )