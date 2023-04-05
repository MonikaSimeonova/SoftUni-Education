function colorize() {
   const list = Array.from(document.querySelectorAll('tr'));
    list.shift();
    let index = 0;
   for (let i = 0; i < list.length; i++) {
    index++;    
    if(index % 2 == 1){
            list[i].style.background = 'teal';
        }
   }
}

/*function colorize() {
  const tr = Array.from(document.querySelectorAll('tr'));
  tr.shift();
  for (let i = 0; i < tr.length; i++) {

   if(i %2==0){
      tr[i].style.backgroundColor = 'teal'
   }
  }
} */