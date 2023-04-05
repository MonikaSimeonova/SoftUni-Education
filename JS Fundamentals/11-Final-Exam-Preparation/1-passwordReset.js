function passwordReset(input){

    let password = input.shift();
    let changesPass = '';
    let nextLine = input.shift();
    while(nextLine !== 'Done'){
        let line = nextLine.split(' ');
        let command = line[0];

        if(command == 'TakeOdd'){
            for(let i = 0; i < password.length; i++){
                if(i % 2 !== 0){
                    changesPass += password[i];
                }
            }
            password = changesPass;
            console.log(password);
        }else if(command == 'Cut'){
            let index = Number(line[1]);
            let lengthToCut = Number(line[2]);

            if(lengthToCut <= password.length && password[index] !== undefined){
                let substring = password.substring(index,index + lengthToCut);
                password = password.replace(substring,'');
                console.log(password);
            }

        }else if (command == 'Substitute'){
            let substring = line[1];
            let substitute = line[2];
            if(!password.includes(substring)){
                console.log(`Nothing to replace!`);
            }else{
                while(password.includes(substring)){
                    password = password.replace(substring,substitute)
                }
                console.log(password);
            }
        }
        nextLine = input.shift();
       
    }
    console.log(`Your password is: ${password}`);
    
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
