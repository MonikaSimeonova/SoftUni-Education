import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { logout } from "../api/data.js";
import { getUserData } from "../api/util.js";
import page from '../../node_modules/page/page.mjs'

const nav = document.querySelector('nav')

const navTemp = (user) => html`
    <div>
        <a href="/catalog">Dashboard</a>
        <a href="/search">Search</a>
    </div>

    <!-- Logged-in users -->
    ${user ? html`
    <div class="user">
        <a href="/create">Add Pair</a>
        <a @click = ${onLogout} href="javascript:void(0)">Logout</a>
    </div>`: 
    html` 
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}
`

export function updateNav(){
    const user = getUserData();
    render(navTemp(user), nav)
}

async function onLogout(){
    await logout()
    updateNav()
    page.redirect('/')
}
