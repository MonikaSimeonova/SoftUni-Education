function solve() {
    const firstOptElement = document.createElement('option')
    const secondOptElement = document.createElement('option')

    firstOptElement.value = 'binary';
    secondOptElement.value = 'hexadecimal'
    firstOptElement.innerHTML = "Binary";
    secondOptElement.innerHTML = "Hexadecimal"

    const menuToElement = document.getElementById('selectMenuTo')
    menuToElement.appendChild(firstOptElement)
    menuToElement.appendChild(secondOptElement)

    const button = document.getElementsByTagName('button')[0]

    button.addEventListener('click', () => {
        const numberInput = document.getElementById('input');

        const output = document.getElementById('result');
        if (menuToElement.value == 'binary') {
            output.value = Number(numberInput.value).toString(2)
        } else {
            output.value = Number(numberInput.value).toString(16).toUpperCase()

        }
    })
}