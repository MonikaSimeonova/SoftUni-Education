export function getUserData(){
    return JSON.parse(sessionStorage.getItem('user'))
}
export function setUserData(data){
    sessionStorage.setItem('user', JSON.stringify(data))
}
export function removeUserData(){
    sessionStorage.removeItem('user')
}