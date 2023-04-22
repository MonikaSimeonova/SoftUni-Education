import { render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";


import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showHome } from "./views/home.js"
import { showCatalog } from "./views/catalog.js";
import { showDetails } from "./views/details.js";
import { showCreate } from "./views/create.js";
import { logout } from "./data.js";

const root = document.getElementById('main')

page('/login', renderMiddleWare, showLogin)
page('/register', renderMiddleWare, showRegister)
page('/', renderMiddleWare, showHome)
page('/catalog', renderMiddleWare, showCatalog)
page('/details/:id', renderMiddleWare, showDetails)
page('/create', renderMiddleWare, showCreate)



let btn = document.getElementById('logout')
btn.children[0].addEventListener('click', async(e)=>{
    e.preventDefault();
    await logout()
    updateNav()
    page.redirect('/')
})


page.start()
updateNav()

function renderMiddleWare(ctx, next) {

    ctx.render = (context) => render(context, root);
    next();
}

export function updateNav(){
    const user = JSON.parse(sessionStorage.getItem('user'))
    const userTabs = Array.from(document.querySelectorAll('#user'))
    const guestTabs = Array.from(document.querySelectorAll('#guest'))
    if(user){
        userTabs.forEach(u=> u.style.display = 'block')
        guestTabs.forEach(g=> g.style.display = 'none')
    }else{
        userTabs.forEach(u=> u.style.display = 'none')
        guestTabs.forEach(g=> g.style.display = 'block')
    }
}


