const url = `http://localhost:3030/jsonstore/collections/books`

async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok == false) {
        const error = await response.json()
        alert(error.message)
        throw new Error(error.message)
    }
    const data = await response.json();
    return data;
}
async function getAllBooks() {
    const books = await request(url);

    const rows = Object.entries(books).map(createRow).join('');
    document.querySelector('tbody').innerHTML = rows;
}

function createRow([id, book]) {

    const result = `
            <tr data-id=${id}>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>`;
    return result;

}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const book = {
        title: formData.get('title'),
        author: formData.get('author'),
    }
    await request(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    //clear input fields
    event.target.reset();
    getAllBooks()
}

async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

    const id = formData.get('id')
    const book = {
        title: formData.get('title'),
        author: formData.get('author'),
    }
    await request(`${url}/${id}`, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    event.target.reset()
    getAllBooks()
}
async function deleteBook(id) {
    await request(`${url}/${id}`, {
        method: 'delete',
    })
    getAllBooks();
}

function start() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks)
    document.getElementById('createForm').addEventListener('submit', createBook)
    document.getElementById('editForm').addEventListener('submit', updateBook)
    document.querySelector('table').addEventListener('click', handleTableClick)


    getAllBooks()
}
start()

function handleTableClick(e) {
    if (e.target.className == 'editBtn') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';
        const bookId = e.target.parentNode.parentNode.dataset.id;

        loadBookForEditing(bookId)

    } else if (e.target.className == 'deleteBtn') {
        const bookId = e.target.parentNode.parentNode.dataset.id;
        deleteBook(bookId);

    }
}

async function loadBookForEditing(id) {
    const book = await request(`${url}/${id}`);

    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="author"]').value = book.author;
}