function modern(string){

    const words = string.split(' ');
    const validWords = [];
    words.forEach(word => {

        const isValidWord = word.startsWith('#') && word.length > 1
        if(isValidWord){
            let isLetter = true;
            let temp ='';
            for(let i = 1; i < word.length; i++){
                const char = word[i].toLowerCase();
                if(char.charCodeAt() < 97 || char.charCodeAt() > 122){
                    isLetter = false;
                    break;

                }else{
                    temp += word[i]
                }
              
                
            }
            if(isLetter){
                console.log(temp);
            }
        }
    })


}
modern('Nowadays everyone uses # to tag a #special word in #socialMedia')