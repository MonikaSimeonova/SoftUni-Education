function validate() {
    const inputEmail = document.getElementById('email');
    
    const valid = /[a-z]+@[a-z]+.[a-z]+/gm;
    ///^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    
    inputEmail.addEventListener('change', isValid)
    
    function isValid(e){
        if(!(inputEmail.value).match(valid)){
            e.target.className = 'error';
        }else{
            e.target.className = '';
        }
    }
}