function solve() {
  const input = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const resElement = document.getElementById('result');

  const toPascal = (text)=> text.split(' ').map((w)=> w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');

  const toCamelCase = (text)=> {
    text = toPascal(text)
    return text[0].toLowerCase() + text.slice(1)
  }

  if(convention === 'Pascal Case'){
    resElement.textContent = toPascal(input)
  }else if(convention == 'Camel Case'){
    resElement.textContent = toCamelCase(input);
  }else{
    resElement.textContent = "Error!"
  }
}