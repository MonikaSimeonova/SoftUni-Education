function solve (string, char, string2){

    let res = string.replace('_', char);

    if (res == string2){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
solve('Str_ng', 'I', 'Strong')