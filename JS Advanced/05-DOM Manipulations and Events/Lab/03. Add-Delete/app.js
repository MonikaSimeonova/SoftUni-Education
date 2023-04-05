function addItem() {
    const input = document.getElementById('newItemText');
    const ulItems = document.getElementById('items');
    const li = document.createElement('li');
    li.textContent = input.value;
    ulItems.appendChild(li);
    input.value = '';
    const a = document.createElement('a');
    a.href = '#'
    a.textContent = '[Delete]';
    li.appendChild(a);
   a.addEventListener('click', (e)=>{
    a.parentElement.remove();
   })
}