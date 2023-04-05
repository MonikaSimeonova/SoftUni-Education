function generatorPassword(input){

    let password = (input[0] + input[1]).toLowerCase();
    let key = input[2].toUpperCase();
    const vowelLetters = ['a', 'e','i','o','u'];
    let currentKeyIndex = 0;

    for (const char of password) {
        if(vowelLetters.includes(char)){
            password = password.replace(char,key[currentKeyIndex++])
            //key[currentKeyIndex]++;
            if(key[currentKeyIndex] == undefined){
                currentKeyIndex = 0
            }
        }
    }

    let finalPassword = password.split('').reverse().join('');
    console.log(`Your generated password is ${finalPassword}`);



}
generatorPassword([
    'ilovepizza',
    'ihatevegetables',
    'orange'
    ])