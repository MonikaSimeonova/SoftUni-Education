function extractText() {
    const items = document.getElementById("items");
    const inputField = document.getElementById("result");
    inputField.value = items.textContent;

}

function extractText(){
    const list = document.getElementById('items').children;
    const itemArr = Array.from(list)
    
    const result = itemArr
    .map(li=>li.textContent)
    .join('\n');

    const output = document.getElementById("result");
    output.value = result
}