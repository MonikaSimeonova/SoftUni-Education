async function solution() {
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const main = document.getElementById('main');
    const response = await fetch(url);
    const data = await response.json();

    let displayData = Object.values(data)

    displayData.forEach(d => {
        const div = document.createElement('div')
        div.setAttribute('class', 'accordion')
        div.innerHTML = ` 
        <div class="head">
            <span>${d.title}</span>
            <button class="button" id=${d._id}>More</button>
        </div>
        <div class="extra"></div> 
    `
        main.appendChild(div)
        const extra = div.querySelector('.extra')
        div.querySelector('button').addEventListener('click', onMore)


        async function onMore(e) {

            let url = `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`

            let res = await fetch(url);
            let data = await res.json();

            let content = Object.values(data)
            
            if (e.target.textContent == 'More') {
                e.target.textContent = 'Less'
                extra.innerHTML = `<p>${content[2]}</p>`
                extra.style.display = 'block'

            } else if (e.target.textContent == 'Less') {
                e.target.textContent = 'More'
                extra.style.display = 'none'
            }
        }
    })
}
solution()