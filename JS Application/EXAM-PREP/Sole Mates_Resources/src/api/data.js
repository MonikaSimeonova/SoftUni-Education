import { post, get, del, put } from "./api.js"
import { removeUserData, setUserData } from "./util.js"


const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    catalog: 'data/shoes?sortBy=_createdOn%20desc',
    create: 'data/shoes',
    getById: 'data/shoes/',
}

export async function login(email, password){
   
    const res =  await post(endpoints.login, {email, password})
    
    setUserData(res);
    
}

export async function register(email, password){
    const res = await post(endpoints.register, {email, password})
    setUserData(res)
}
export async function logout(){
    const res = await get(endpoints.logout)
    removeUserData()
    return res;
}
export function catalogItems(){
    return get(endpoints.catalog)
}
export function createNewItem(data){
    return post(endpoints.create, data)
}
export function getByid(id){
    return get(endpoints.getById+id)
}
export function delByid(id){
    return del(endpoints.getById+id)
}
export function putByid(id, data){
    return put(endpoints.getById+id, data)
}