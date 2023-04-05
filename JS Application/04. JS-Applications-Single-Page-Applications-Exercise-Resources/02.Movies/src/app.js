

import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";


const routes = {
    '/': showHome,
    '/login': showLogin,
    '/register': showRegister,
}

export function showView(section){
    let views = [...document.querySelectorAll('.view-section')];
    views.forEach(v=>v.style.display = 'none')
    section.style.display = 'block';

}

document.querySelector('nav').addEventListener('click', onNavigate)
document.querySelector('#add-movie-button a').addEventListener('click',onNavigate)

function onNavigate(event){
    if(event.target.tagName == 'A' && event.target.href ){
        event.preventDefault();
        const url = new URL (event.target.href)

        const view = routes[url.pathname]
        if(typeof view == 'function'){
            view()
        }

    }
}