function subtract() {
    const firstNumber = document.getElementById('firstNumber').value
    const secondNumber = document.getElementById('secondNumber').value
    const res = document.getElementById('result');
     res.textContent = Number(firstNumber) - Number(secondNumber)
}