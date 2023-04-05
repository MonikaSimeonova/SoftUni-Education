import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getUserData } from '../util.js/user.js';
import { logout } from './data.js';

import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');

page(middleWare)

page('/', homeView)
page('/home', homeView)
page('/create', createView)
page('/login', loginView)
page('/register', registerView)
page('/catalog', catalogView)
page('/details/:id', detailsView)
page('/edit/:id', editView)


page.start()
updateNav()
page.redirect('/')

const logoutBtn = document.querySelector('#logout')
logoutBtn.addEventListener('click', onLogout)

function onLogout(){
    logout()
    updateNav()
    page.redirect('/catalog')
}

function middleWare(ctx, next){
    ctx.render = (content) => render(content, main)
    ctx.updateNav = updateNav;
    next()
}

function updateNav(){
    const users = document.querySelector('.user');
    const guest = document.querySelector('.guest');
    const user = getUserData();
    if(user){
        users.style.display = 'block'
        guest.style.display = 'none'
    }else{
        users.style.display = 'none'
        guest.style.display = 'block'
    }
}