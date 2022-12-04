function matchPhoneNums(input){

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let text = input.shift();

    let res = text.match(pattern);

    console.log(res.join(', '));
}

matchPhoneNums(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])