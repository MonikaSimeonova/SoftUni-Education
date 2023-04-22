import { html } from "../node_modules/lit-html/lit-html.js"
import { getAllIdeas } from "../data.js"

export async function showCatalog(ctx) {
    const res = await getAllIdeas()

    ctx.render(catalogTemp(res))
}
function catalogTemp(data) {

    return html` 
    <div id="dashboard-holder">
    ${data.length == 0 ? 
    '<h1>No ideas yet! Be the first one :)</h1>'
    :
    Object.values(data).map(r => showIdea(r))
}
</div>`
}

function showIdea(idea) {
    
    return html`  <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src=${idea.img} alt="Card image cap">
    <a class="btn" href="/details/${idea._id}">Details</a>
</div>`
}