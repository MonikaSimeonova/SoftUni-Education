import { getUserData } from "./util.js";

const host = `http://localhost:3030/`;

async function request(method, url, data){
    const options = {
        method,
        headers: {},
    }
    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }
    const user = getUserData()
    

    if(user){
        
        options.headers['X-Authorization'] = user.accessToken;
    }
    try {
        const response = await fetch(host+url, options)
        if(response.ok == false){
            const err = await response.json()
            throw new Error(err.message)
        }
        if(response.status == 204){
            return response;
        }
        const result = await response.json()
        return result;
    } catch (error) {
        alert(error.message)
        throw(error)
    }
}
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');