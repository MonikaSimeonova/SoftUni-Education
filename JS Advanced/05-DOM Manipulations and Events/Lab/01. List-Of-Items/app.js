function addItem() {
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');
    //const btn = document.querySelector("input[type='button'")

    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}