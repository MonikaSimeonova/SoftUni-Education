window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name')
  const lastNameInput = document.getElementById('last-name')
  const ageInput = document.getElementById('age')
  const genderSelectInput = document.getElementById('genderSelect')
  const taskInput = document.getElementById('task')
  const clearBtn = document.getElementById('clear-btn')

  const submitBtn = document.getElementById('form-btn')

  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let age = ageInput.value
    let gender = genderSelectInput.value
    let task = taskInput.value

    if (firstName == '' || lastName == '' || age == '' || gender == '' || task == '') {
      return;
    }

    const ul = document.getElementById('in-progress');
    let counter = document.getElementById('progress-count')

    const li = document.createElement('li');
    li.classList.add('each-line');
    li.innerHTML = `
      <article>
      <h4>${firstName} ${lastName}</h4>
      <p>${gender}, ${age}</p>
      <p>Dish description: ${task}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="complete-btn">Mark as complete</button>`

    ul.appendChild(li)
    counter.textContent++
    clearInputs()

    let editBtn = li.querySelector('.edit-btn').addEventListener('click', onEdit)
    let completeBtn = li.querySelector('.complete-btn').addEventListener('click', onComplete)

    function onEdit(e) {
      firstNameInput.value = firstName
      lastNameInput.value = lastName
      ageInput.value = age
      genderSelectInput.value = gender
      taskInput.value = task

      counter.textContent --;
      li.remove();
    }

    function onComplete(e){
      const ulFinish = document.getElementById('finished')
      let lifinish = document.createElement('li')
      lifinish.setAttribute('class', 'each-line')
      lifinish.innerHTML = `
      <article>
      <h4>${firstName} ${lastName}</h4>
      <p>${gender}, ${age}</p>
      <p>${task}</p>
    </article>`
      
      li.remove();
      counter.textContent --;
      ulFinish.appendChild(lifinish)

      clearBtn.addEventListener('click',()=>{
        lifinish.remove()
      })
    }
  }

  function clearInputs() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    genderSelectInput.value = "";
    taskInput.value = "";
  }
}
