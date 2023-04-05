function extract(content) {
    const items = document.getElementById('content').textContent;
    const pattern = /\(([^\)]+)\)/gm;
    let result = [];
    
   let match = pattern.exec(items);
   while(match){
    result.push(match[1])
    match = pattern.exec(items);
   }
   return result.join('; ');
}