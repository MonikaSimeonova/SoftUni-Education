import { createPost, onClose, showHome } from "./home.js"

const homeAnchorElement = document.querySelector('a')
homeAnchorElement.addEventListener('click', showHome)

const buttonsElements = document.querySelectorAll('button')

let cancelBtnElement = buttonsElements[0];
cancelBtnElement.addEventListener('click', onClose)

let createPostButtonElement = buttonsElements[1];
createPostButtonElement.addEventListener('click', createPost);


