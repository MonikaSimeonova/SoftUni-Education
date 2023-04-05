import { removeUser, setUserData } from "../util.js/user.js"
import { del, get, post, put } from "../api/api.js"


const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'catalog': 'data/products?sortBy=_createdOn%20desc', 
    'getId': 'data/products/',
    'create': 'data/products'
}

export async function login(email, password) {
   
    const user = await post(endpoints.login, { email, password })
    setUserData(user)
}
export async function register(email, password){
    const user = await post(endpoints.register, {email, password})
    setUserData(user)
}
export function logout(){
    get(endpoints.logout)
    removeUser()
}
export async function catalog(){
    return get(endpoints.catalog)
}
export async function getDetails(id){
    return get(endpoints.getId+id)
}
export async function createProduct(data){
    return post(endpoints.create, data)
}
export async function deleteProduct(id){
    return del(endpoints.getId+id)
}
export async function editProduct(id, data){
    return put(endpoints.getId+id, data)
}