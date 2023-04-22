import * as api from "./api.js"

const endpoints = {
    "login": "users/login",
    "register": "users/register",
    "logoutL": 'users/logout',
    'getIdeas': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'details': 'data/ideas/',
    'create': 'data/ideas',
}

export async function login(email, password) {
    const res = await api.post(endpoints.login, { email, password })
    sessionStorage.setItem("user", JSON.stringify(res))
    return res;
}
export async function register(email, password) {
    const res = await api.post(endpoints.register, { email, password });
    sessionStorage.setItem("user", JSON.stringify(res));
    return res;
}
export async function logout() {
    
    const res = await api.get(endpoints.logoutL)
    sessionStorage.removeItem("user")
    return res;
}
export async function getAllIdeas() {
    const res = await api.get(endpoints.getIdeas)
    return res;
}
export async function getDetails(id) {
    const res = await api.get(endpoints.details + id)
    return res;
}
export async function delItem(id) {
    const res = await api.del(endpoints.details + id)
    return res;
}
export async function createItem(data) {
   
    const res = await api.post(endpoints.create, data)
    return res;
}