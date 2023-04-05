import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/data.js";


const registerTemplate = (onReg) => html` 
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit = ${onReg} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>`

export async function showRegister(ctx) {
    ctx.render(registerTemplate(onReg))

    async function onReg(e){
        e.preventDefault();

        const {email, password, ['re-password']: repass} = e.target.elements;
        if(!email.value || !password.value || !repass.value){
            return alert('All fields are needed!')
            
        }
        if(password.value !== repass.value){
            return alert('Password don\'t match!')
        }
        await register(email.value, password.value)
        ctx.page.redirect('/catalog')
        ctx.updateNav()
    }
}