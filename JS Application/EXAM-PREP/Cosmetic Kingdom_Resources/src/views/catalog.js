import { html } from "../../node_modules/lit-html/lit-html.js"
import { catalog } from "../data.js"



const catalogTemplate = (items)=>html`  
<h2>Products</h2>
<section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
  ${items.length > 0 ? items.map(i=> html`<div class="product">
    <img src=${i.imageUrl} alt="example1" />
    <p class="title">${i.name}</p>
    <p><strong>Price:</strong><span class="price">${i.price}</span>$</p>
    <a class="details-btn" href="/details/${i._id}">Details</a>
  </div>`) : html`<h2>No products yet.</h2>`}
</section>`

export async function catalogView(ctx){

    const data = await catalog()
    ctx.render(catalogTemplate(data))
}