function search() {
   const itemList = Array.from(document.querySelectorAll('#towns li'));
   const resDiv = document.getElementById('result');
   const searchInput = document.getElementById('searchText');
   let counter = 0;

   itemList.forEach(el=>{
      if(el.textContent.includes(searchInput.value)){
         el.style.fontWeight = 'bold';
         el.style.textDecoration = "underline"
         counter++
      }else{
         el.style.fontWeight = 'normal';
         el.style.textDecoration = "none"
      }
   });
   resDiv.textContent = `${counter} matches found`
}
