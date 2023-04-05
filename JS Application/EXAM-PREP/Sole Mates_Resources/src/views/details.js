import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { delByid, getByid } from "../api/data.js";
import { getUserData } from "../api/util.js";


const detailsTemplate = (data, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${data.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${data.brand}</span></p>
            <p>
                Model: <span id="details-model">${data.model}</span>
            </p>
            <p>Release date: <span id="details-release">${data.release}</span></p>
            <p>Designer: <span id="details-designer">${data.designer}</span></p>
            <p>Value: <span id="details-value">${data.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${data.user == data._ownerId ? html`
        <div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`: nothing}
        
    </div>
</section>`


export async function detailsView(ctx){
    const id = ctx.params.id
    const data = await getByid(id)
    const user = getUserData();
    if(user){
        data.user = user._id
    }

    ctx.render(detailsTemplate(data, onDelete))

    async function onDelete(){
        const desision = confirm('Are you sure?')

        if(desision){
            await delByid(id)
            ctx.page.redirect('/catalog')
        }
    }
}