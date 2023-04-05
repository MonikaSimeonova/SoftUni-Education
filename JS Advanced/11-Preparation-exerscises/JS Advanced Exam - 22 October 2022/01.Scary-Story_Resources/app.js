window.addEventListener("load", solve);

function solve() {


  const firstName = document.getElementById('first-name')
  const lastName = document.getElementById('last-name')
  const age = document.getElementById('age')
  const storyTitle = document.getElementById('story-title')
  const genre = document.getElementById('genre')
  const story = document.getElementById('story')

  const publishBtn = document.getElementById('form-btn')

  publishBtn.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault();

    let first = firstName.value
    let second = lastName.value
    let years = age.value
    let title = storyTitle.value
    let genreMovie = genre.value
    let theStory = story.value;

    if (first == '' || second == '' || years == '' || title == '' || genreMovie == '' || theStory == '') {
      return
    }

    const previEwmList = document.getElementById('preview-list')
    const li = document.createElement('li');
    li.classList.add('story-info')
    li.innerHTML = `
    <article>
          <h4>Name: ${first} ${second}</h4>
          <p>Age: ${years}</p>
          <p>Title: ${title}</p>
          <p>Genre: ${genreMovie}</p>
          <p>${theStory}</p>
    </article>
        <button class="save-btn">Save Story</button>
        <button class="edit-btn">Edit Story</button>
        <button class="delete-btn">Delete Story</button>`

    previEwmList.appendChild(li);
    allClear()
    publishBtn.disabled = true;

    const edinBtn = document.querySelector('.edit-btn');
    edinBtn.addEventListener('click', onEdit);
    
    function onEdit() {
      firstName.value = first
      lastName.value = second
      age.value = years
      storyTitle.value = title
      genre.value = genreMovie
      story.value = theStory

      publishBtn.disabled = false;
      li.remove();
    }

    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', onSave);

    function onSave(){
      const main = document.getElementById('main');
      main.innerHTML = '';
      const h1 = document.createElement('h1')
      h1.textContent = 'Your scary story is saved!'
      main.appendChild(h1)
    }

    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', onDelete);

    function onDelete(){
      li.remove();
      publishBtn.disabled = false;

    }
  }
  function allClear() {
    firstName.value = '';
    lastName.value = '';
    storyTitle.value = '';
    genre.value = '';
    story.value = '';
    age.value = '';
  }
}
