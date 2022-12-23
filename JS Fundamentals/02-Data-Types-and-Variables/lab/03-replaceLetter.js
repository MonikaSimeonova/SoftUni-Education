function solve (string, char, string2){

    let res = string.replace('_', char);

    if (res == string2){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
solve('Str_ng', 'I', 'Strong')

/*You will receive 3 parameters (string, char, string). The first string will be a word with a missing char replaced with an underscore '_'. You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.

If they are equals, you should print "Matched", otherwise print "Not Matched". */