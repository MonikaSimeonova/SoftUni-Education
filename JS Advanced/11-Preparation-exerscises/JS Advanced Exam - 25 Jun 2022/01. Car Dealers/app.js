window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById('make')
  const modelInput = document.getElementById('model')
  const yearInput = document.getElementById('year')
  const fuelInput = document.getElementById('fuel')
  const costInput = document.getElementById('original-cost')
  const sellingInput = document.getElementById('selling-price')

  let result = 0

  const publishBtn = document.getElementById('publish');

  publishBtn.addEventListener('click', onPublish)

  function onPublish(e) {
    e.preventDefault()

    let make = makeInput.value
    let model = modelInput.value
    let year = yearInput.value
    let fuel = fuelInput.value
    let cost = costInput.value
    let selling = sellingInput.value

    if (make == '' || model == '' || year == '' || fuel == '' || cost == '' || selling == '' || cost > selling) {
      return
    }

    let tbody = document.getElementById("table-body")
    let tr = document.createElement('tr')
    tr.classList.add('row')
    tr.innerHTML = `   
  <td>${make}</td>
  <td>${model}</td>
  <td>${year}</td>
  <td>${fuel}</td>
  <td>${cost}</td>
  <td>${selling}</td>
  <td>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn sell">Sell</button>
  </td>
`
    tbody.appendChild(tr);
    clearInputs()

    let edit = tr.querySelector('.edit')
    let sell = tr.querySelector('.sell')
    edit.addEventListener('click', onEdit)
    sell.addEventListener('click', onSell)

    function onEdit(e) {
      makeInput.value = make
      modelInput.value = model
      yearInput.value = year
      fuelInput.value = fuel
      costInput.value = cost
      sellingInput.value = selling

      tr.remove()
    }

    function onSell(e) {
      const carsList = document.getElementById('cars-list')
      let li = document.createElement('li')
      li.classList.add('each-list')

      let spanName = document.createElement('span')
      spanName.textContent = `${make} ${model}`

      let spanYear = document.createElement('span')
      spanYear.textContent = `${year}`

      let finalPrice = document.createElement('span')
      let finalPriceCost = Number(selling) - Number(cost)
      finalPrice.textContent = `${finalPriceCost}`

      li.appendChild(spanName)
      li.appendChild(spanYear)
      li.appendChild(finalPrice)

      carsList.appendChild(li)

      tr.remove()

      let profit = document.getElementById('profit')
      result += finalPriceCost
      profit.textContent = `${result.toFixed(2)}`;
      //profit.style.fontWeight = 'strong'
    }
    function clearInputs() {
      makeInput.value = "";
      modelInput.value = "";
      yearInput.value = "";
      fuelInput.value = "";
      costInput.value = "";
      sellingInput.value = "";
    }
  }
}
