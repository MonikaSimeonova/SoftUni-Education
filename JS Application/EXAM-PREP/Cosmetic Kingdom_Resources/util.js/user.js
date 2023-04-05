export function getUserData(){
    return JSON.parse(sessionStorage.getItem('user'));
}
export function setUserData(data){
    sessionStorage.setItem(('user'), JSON.stringify(data))
}
export function removeUser(){
    sessionStorage.removeItem('user')
}