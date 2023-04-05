function countString(text, word){

    let count = text.split(' ').filter(w => w === word).length;
    console.log(count);
    // tova e za otdelni dumi


    // let index = 0;
    // let count = 0;
    // while(index >= 0){
    //     count++;
    //     index = text.indexOf(word, index + 1)
    // }
    // console.log(count); // tova e ako e za indeksi
    
}
countString('This is a word and it also is a sentence',

'is')