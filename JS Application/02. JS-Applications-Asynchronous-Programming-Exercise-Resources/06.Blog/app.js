function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);

    const posts = [];
    async function loadPosts() {
        try {
            const url = 'http://localhost:3030/jsonstore/blog/posts';
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const data = await res.json();
            document.getElementById('posts').innerHTML = '';

            Object.entries(data).forEach(([key, value]) => {
                const optionElement = document.createElement('option');
                optionElement.value = key;
                optionElement.textContent = value.title;
                document.getElementById('posts').appendChild(optionElement);
                posts.push({ title: value.title, body: value.body });
            })
        } catch (e) {
            console.log(e);
        }
    }

    async function viewPost() {
        try {
            const selectedEl = document.getElementById('posts');
            const url = 'http://localhost:3030/jsonstore/blog/comments';
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const data = await res.json();

            const currentComents = Object.values(data).filter(el => el.postId === selectedEl.value);

            document.getElementById('post-title').textContent = selectedEl.selectedOptions[0].textContent;

            const po = posts.filter(p => p.title === selectedEl.selectedOptions[0].textContent);
            document.getElementById('post-body').innerHTML = `${po[0].body}`;
            document.getElementById('post-comments').innerHTML = '';

            currentComents.forEach(el => {
                const liEl = document.createElement('li');
                liEl.textContent = el.text;
                document.getElementById('post-comments').appendChild(liEl);
            })
        } catch (e) {

        }
    }
}

attachEvents();