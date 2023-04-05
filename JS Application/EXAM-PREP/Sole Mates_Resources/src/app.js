import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"


import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";


const main = document.querySelector('main')

page(middleWare)

page('/',showHome )
page('/register', showRegister)
page('/login', showLogin)
page('/catalog', showCatalog)
page('/create', showCreate)
page('/details/:id', detailsView)
page('/edit/:id', showEdit)


page.start()
updateNav()

function middleWare(ctx, next){
    ctx.render = (content)=>render(content, main)
    ctx.updateNav = updateNav;
    next();
}



