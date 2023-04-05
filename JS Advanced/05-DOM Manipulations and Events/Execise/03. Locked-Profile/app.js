function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(e=> e.addEventListener('click', onClick));


    function onClick(e){
        const parent = e.target.parentElement;
        console.log(parent);
        const unLockedCheck = parent.querySelector('input[value="unlock"]')

        if(unLockedCheck.checked){
           const hiddenDiv =  parent.querySelector('div');
           hiddenDiv.style.display === "block" ? (hiddenDiv.style.display = "none") : (hiddenDiv.style.display = "block");

            e.target.textContent === "Show more" ? (e.target.textContent = "Hide it") : (e.target.textContent = "Show more");
        }
    }
}