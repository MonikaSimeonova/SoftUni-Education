const host = 'http://localhost:3030/';

async function request(method, url, data){
    const user = JSON.parse(sessionStorage.getItem('user'))

    const options = {
        method: method,
        headers: {}
    }
    //post 
    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }
    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const res = await fetch(`${host}${url}`, options)
        if(res.ok == false){
            // if(res.status == 403){
            //     sessionStorage.removeItem('user')
            //     throw new Error('Access denied')
            // }
            const err = await res.json()
            throw new Error(err.message);     
        }
        if(res.status == 204){
            return res;
        }
        return res.json()
    } catch (error) {
        alert(error.message)
        throw error;
    }
}

const get = request.bind(null, "GET")
const post = request.bind(null, "POST")
const put = request.bind(null, "PUT")
const del = request.bind(null, "DELETE")

export{get, post, put, del}