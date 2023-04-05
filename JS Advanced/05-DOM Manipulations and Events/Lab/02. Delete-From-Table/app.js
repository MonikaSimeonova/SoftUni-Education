function deleteByEmail() {
const input = document.querySelector('input[type="text"]').value;
const result = document.getElementById('result');
const row = Array.from(document.querySelectorAll('tbody tr'));
   
   for (const line of row) {
    if(line.textContent.includes(input)){
        line.remove()
        result.textContent = 'Deleted.'
        return;
    }
   }
   result.textContent = 'Not found.'
}