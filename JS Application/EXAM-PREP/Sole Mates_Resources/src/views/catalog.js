import { html } from "../../node_modules/lit-html/lit-html.js";
import { catalogItems } from "../api/data.js";


const catalogTemplate = (data) => html`<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${data.length ? data.map(item => html`
        <li class="card">
            <img src=${item.imageUrl} alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${item.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${item.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
            <a class="details-btn" href="/details/${item._id}">Details</a>
        </li>`) : html`<h2>There are no items added yet.</h2>`}
    </ul>
    <!-- Display an h2 if there are no posts -->
</section>`

export async function showCatalog(ctx) {

    const data = await catalogItems()
    console.log(data);
    ctx.render(catalogTemplate(data))
}