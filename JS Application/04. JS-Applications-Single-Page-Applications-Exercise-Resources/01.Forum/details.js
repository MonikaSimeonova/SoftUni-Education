import { showHome } from "./home.js"
import { createElements } from "./utils.js";

const homeAnchorElement = document.querySelector('a')
homeAnchorElement.addEventListener('click', showHome)

function fetchPost(){
    const postId = localStorage.getItem('postId')
    loadPost(postId);
    async function loadPost(postId){
    
        let formElement = document.querySelector('form');
        formElement.setAttribute('dataset.id', postId)
    
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`)
    
            if(!res.ok){
                const err = await res.json()
                throw new Error(err.message)
            }
            const post = await res.json()
    
            let themContentDivElement = document.querySelector('.theme-content')
            themContentDivElement.replaceChildren();
    
            const themeTitleDivEl = createElements('div','',themContentDivElement, {'class':'theme-title'})
            const themeNameWrapperDivEl = createElements('div','',themeTitleDivEl, {'class':'theme-name-wrapper'})
            const themeNameDivEl = createElements('div','',themeNameWrapperDivEl, {'class':'theme-name'})
            createElements('h2',post.title,themeNameDivEl, {})
    
            const commnetDivElement = createElements('div','',themContentDivElement, {'class':'comment'})
            const headerDivElement = createElements('div','',commnetDivElement, {'class':'header'})
            createElements('img','',headerDivElement, {'src':'./static/profile.png', 'alt': 'avatar'})
    
            const paragraphElement = createElements('p','',headerDivElement, {})
            paragraphElement.innerHTML = `<span>${post.username}</span> posted on <time>${post.createDate}</time>`
            createElements('p',post.content,headerDivElement, {'class': 'post-content'})
    
            const commnets = await loadCommnets(postId)
    
            for (const commnet of Object.values(commnets)) {
                const userCommnetsDivEl = createElements('div','',commnetDivElement, {'class':'user-comment'})
                const topicNAmeWrapperDivEl = createElements('div','',userCommnetsDivEl, {'class':'topic-name-wrapper'})
                const topicNAmeDivEl = createElements('div','',topicNAmeWrapperDivEl, {'class':'topic-name'})
                const paragraphElement = createElements('p','',topicNAmeDivEl, {})
                paragraphElement.innerHTML = `<strong>${commnet.username}</strong> commented on <time>${commnet.createDate}</time>`
    
                const postContentDivEl = createElements('div','',topicNAmeDivEl, {'class':'post-content'})
    
                createElements('p',commnet.content,postContentDivEl, {})
    
    
            }
            const themeAnswerComentDivElement = createElements('div', '', themContentDivElement, {'class': 'answer-comment'})
            const answerParagraphElement = createElements('p', '', themeAnswerComentDivElement, {})
            
            answerParagraphElement.innerHTML = `<span>CuurentUser</span> comment:`
            const divElementAnswer = createElements('div', '', themContentDivElement, {'class': 'answer-comment'})
    
        } catch (error) {
            alert(error.message)
        }
    
        
    }
}
fetchPost()


async function loadCommnets(postId){
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
        if(!res.ok){
            const err = await res.json()
            throw new Error(err.message)
        }
        const commnets = await res.json()
        return Object.values(commnets).filter(commnets => commnets.postId == postId)

    } catch (error) {
        alert(error.message)
    }
}