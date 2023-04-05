import { html } from "../../node_modules/lit-html/lit-html.js"
import { getUserData } from "../../util.js/user.js"
import { deleteProduct, getDetails } from "../data.js"

let userId = '';
let isGuest = true;
let isOwner = '';
let data = '';

const detailsTemplate = (data, isOwner, isGuest, onDelete) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${data.imageUrl} alt="example1" />
    <p id="details-title">${data.name}</p>
    <p id="details-category">
      Category: <span id="categories">${data.category}</span>
    </p>
    <p id="details-price">
      Price: <span id="price-number">${data.price}</span>$</p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Bought: <span id="buys">0</span> times.</h4>
        <span>${data.description}</span>
      </div>
    </div>
    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${isOwner ? html`
      <a href='/edit/${data._id}' id="edit-btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
    : null}
      <!--Bonus - Only for logged-in users ( not authors )-->
      ${!isGuest && !isOwner ? html`<a href="" id="buy-btn">Buy</a>`
    : null}
    </div>
  </div>
</section>`

export async function detailsView(ctx) {
  const id = ctx.params.id
  const user = getUserData()
  
  data = await getDetails(id)

  if (user) {
    isGuest = false
    isOwner = user._id === data._ownerId
    
  }
  ctx.render(detailsTemplate(data, isOwner, isGuest, onDelete))


  async function onDelete() {
    console.log('del');
    const choice = confirm('Are you sure?')
    if (choice) {
      await deleteProduct(id)
      ctx.page.redirect('/catalog')
    }

  }

}