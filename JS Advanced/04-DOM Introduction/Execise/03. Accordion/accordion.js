function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const extraDIv = document.getElementById('extra');

    if(button.textContent == "More"){
        button.textContent = "Less";
        extraDIv.style.display = 'block'
    }else{
        button.textContent = 'More'
        extraDIv.style.display = 'none'

    }
}