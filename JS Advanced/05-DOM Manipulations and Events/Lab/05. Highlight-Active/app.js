function focused() {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    const div = document.querySelector('div');
    const childrenDivs = Array.from(div.children);

    inputs.forEach(input=>{
        input.addEventListener('focus', ()=>{
            input.parentElement.classList = 'focused';
        })
        input.addEventListener('blur',()=>{
            input.parentElement.classList = '';
        })
    })
}