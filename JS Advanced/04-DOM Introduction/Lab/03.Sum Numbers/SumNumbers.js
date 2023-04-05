function calc() {
    const input1 = document.getElementById('num1').value
    const input2 = document.getElementById('num2').value

    const result = Number(input1) + Number(input2);
    const sum = document.getElementById('sum');
    sum.value = result;

}
