import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import { getDetails } from "../data.js"
import { delItem } from "../data.js"

let context = null
export async function showDetails(ctx) {
    context = ctx
    const id = ctx.params.id
    const ideaDetail = await getDetails(id)
    ctx.render(detailsCatalog(ideaDetail))
}

function detailsCatalog(idea, deleteIdea) {
    
    let user = JSON.parse(sessionStorage.getItem('user'))
    let owner = idea._ownerId;


    let idIdea = idea._id
    if (user == null) {

        return html`
        <div class="container home some">
            <img class="det-img" src=${idea.img} />
            <div class="desc">
                <h2 class="display-5">${idea.title}</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">${idea.description}</p>
            </div>
        </div>`
    }
    return html`
    
    <div class="container home some">
        <img class="det-img" src=${idea.img} />
        <div class="desc">
            <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${idea.description}</p>
        </div>
        ${user._id == owner ?html`<div class="text-center">
            <a @click=${deleteIdea} class="btn detb" href="/delete/${idea._id}">Delete</a>
        </div>` : ""}
    
    </div>`



    async function deleteIdea(e) {
        e.preventDefault()

        const user = JSON.parse(sessionStorage.getItem('user'));
        const ownerId = idea._ownerId
        const userId = user._id

        if (user && userId === ownerId) {

            await delItem(idIdea);
            context.page.redirect('/catalog')
        }
    }
}