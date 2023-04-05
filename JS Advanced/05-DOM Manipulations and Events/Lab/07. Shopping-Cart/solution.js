function solve() {
   let boughtProductsArr = [];
   let boughtPriceArr = [];
   let sum = 0;
   const productsDivs = Array.from(document.querySelectorAll('.product'));
   const textArea = document.querySelector('textarea');
   const checkout = document.querySelector('.checkout');

   checkout.addEventListener('click', onSum);
  
   productsDivs.forEach(el=>{
      const children = Array.from(el.children);
      const [image,details,addBtn, price] = children;
      const productName = details.firstElementChild.textContent;
     
      addBtn.addEventListener('click', onClick);

      function onClick(){
         textArea.textContent += `Added ${productName} for ${(Number(price.textContent).toFixed(2))} to the cart.\n`;
         
         if(!boughtProductsArr.includes(productName)){
            boughtProductsArr.push(productName);  
         }
         boughtPriceArr.push(price.textContent);
      }
   });
   
   function onSum(){

      for (const money of boughtPriceArr) {
         sum += Number(money)
      }
      textArea.textContent += `You bought ${boughtProductsArr.join(', ')} for ${sum.toFixed(2)}.`
      
      let disabled = Array.from(document.querySelectorAll('.add-product'));

      for (const btn of disabled) {
         btn.disabled = true;
      }
      checkout.disabled = true;
   }
}