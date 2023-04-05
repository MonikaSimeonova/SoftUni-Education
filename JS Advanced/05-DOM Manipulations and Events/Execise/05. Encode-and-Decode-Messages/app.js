function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let encodedMessage = '';
        const input = textAreas[0].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            encodedMessage += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        textAreas[1].value = encodedMessage;
        textAreas[0].value = '';
    }
    function decode(){
        let decodedMessage = '';
        const input = textAreas[1].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            decodedMessage += String.fromCharCode(element.charCodeAt(0) - 1);

        }
        textAreas[1].value = decodedMessage;
    }
}

/*function encodeAndDecodeMessages() {

    const [textarea1, textarea2] = Array.from(document.querySelectorAll('textarea'));
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('button'))

    encodeBtn.addEventListener('click', onEncode);
    decodeBtn.addEventListener('click', onDecode);


    function onEncode() {
        let input1 = (textarea1.value).split('');
        let newInput = ''
        for (const letter of input1) {
            let charcode = (letter.charCodeAt() + 1);
            newInput += String.fromCharCode(charcode);
        }
        textarea1.value = '';
        textarea2.value = newInput;
    }

    function onDecode() {
        let input2 = (textarea2.value).split('');
        let decodeMsg = '';
        for (const line of input2) {
            let charcode = (line.charCodeAt() - 1);
            decodeMsg += String.fromCharCode(charcode);
        }
        textarea2.value = decodeMsg;
    }
} */