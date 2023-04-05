function validate() {
    // The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
    // · The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed (letters, numbers, and _).
    // · The inputs of the password and confirm-password field must match.
    // · The email field must contain the “@” symbol and at least one "."(dot) after it. 

    const usernameInput = document.getElementById('username')
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const confirmpasswordInput = document.getElementById('confirm-password')
    const checkCompany = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const form = document.getElementById('registerForm');
    const valid = document.getElementById('valid')
    const companyNumber = document.getElementById('companyNumber')



    checkCompany.addEventListener('change', () => {
        if (checkCompany.checked) {
            companyInfo.style.display = 'block'

        } else {
            companyInfo.style.display = 'none'
        }

    })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isUserName = false;
        let isEmail = false;
        let isPass = false;
        let isCompanyNum = false;

        const usernamePattern = /^[a-zA-Z0-9]+$/;
        const emailPatters = /.*@.*\..*/;
        const passwordPattern = /^[\w]+$/;

        if(checkCompany.checked){
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = 'none'
                isCompanyNum = true;
            } else {
                companyNumber.style.borderColor = 'red'
            }
        }else{
            isCompanyNum = true;
        }

        if (usernamePattern.test(usernameInput.value) && usernameInput.value.length >= 3 && usernameInput.value.length <= 20) {
            usernameInput.style.border = 'none';
            isUserName = true;
        } else {
            usernameInput.style.borderColor = 'red'
        }
        if (emailPatters.test(emailInput.value)) {
            emailInput.style.border = 'none'
            isEmail = true;
        } else {
            emailInput.style.borderColor = 'red'
        }
        if (passwordPattern.test(passwordInput.value) && (passwordInput.value === confirmpasswordInput.value) && (passwordInput.value.length >= 5 && passwordInput.value.length <= 15)) {

            passwordInput.style.border = 'none'
            confirmpasswordInput.style.border = 'none'
            isPass = true;
        } else {
            passwordInput.style.borderColor = 'red'
            confirmpasswordInput.style.borderColor = 'red'
        }

        if (isUserName && isEmail && isPass && isCompanyNum) {
            valid.style.display = 'block'
        }else{
            valid.style.display = 'none'
        }
    })

}

