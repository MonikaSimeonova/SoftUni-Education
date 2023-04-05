window.addEventListener('load', solve);

function solve() {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');

    document.getElementById('next-btn').addEventListener('click', (e) => {
        const nextBtn = document.getElementById('next-btn');
        e.preventDefault();

        if (firstName.value == '' || lastName.value == '' || dateIn.value == '' ||
            dateOut.value == '' || peopleCount.value == '' || dateIn.value > dateOut.value) {
            return;
        }
        const ul = document.querySelector('.info-list');
        const li = document.createElement('li');
        ul.appendChild(li);
        
        const article = document.createElement('article');
        li.className = 'reservation-content';
        li.appendChild(article);
        
        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        article.appendChild(h3);
        
        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${dateIn.value}`
        article.appendChild(pDate);
        
        const pTodate = document.createElement('p');
        pTodate.textContent = `To date: ${dateOut.value}`
        article.appendChild(pTodate);
        
        const peopleP = document.createElement('p');
        peopleP.textContent = `For ${peopleCount.value} people`;
        article.appendChild(peopleP);
        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        li.appendChild(editBtn);
        
        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.className = 'continue-btn';
        li.appendChild(continueBtn)

        //saving the values by veriables
        let editFirstName = firstName.value;
        let editLastName = lastName.value;
        let editdateIn = dateIn.value;
        let editDateOut = dateOut.value;
        let editPeople = peopleCount.value;

        //clear the input data
        firstName.value = '';
        lastName.value = '';
        dateIn.value = '';
        dateOut.value = '';
        peopleCount.value = '';

        //disabled the next btn
        e.target.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        const edit = document.querySelector('.edit-btn').addEventListener('click', () => {
            //setting the values to the input fields again
            firstName.value = editFirstName;
            lastName.value = editLastName;
            dateIn.value = editdateIn;
            dateOut.value = editDateOut;
            peopleCount.value = editPeople;

            document.querySelector('.reservation-content').remove();
            nextBtn.disabled = false;

        });

        const continueFunc = document.querySelector('.continue-btn').addEventListener('click', (e) => {
            const confirmList = document.querySelector('.confirm-list');

            li.removeChild(editBtn)
            li.removeChild(continueBtn)

            const ulHtml = ul.innerHTML;
            confirmList.innerHTML = ulHtml;
            document.querySelector('.reservation-content').remove();

            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn'
            confirmBtn.textContent = 'Confirm'
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn'
            cancelBtn.textContent = 'Cancel';
            const liElement = document.querySelector('.reservation-content')
            liElement.appendChild(confirmBtn);
            liElement.appendChild(cancelBtn);

            let confirm = document.querySelector('.confirm-btn');
            let cancel = document.querySelector('.cancel-btn');

            confirm.addEventListener('click', onConfirm)

            //confirm button when clicked showns Confirmed in green color
            function onConfirm() {
                liElement.remove();
                nextBtn.disabled = false;
                const verification = document.getElementById('verification');
                verification.className = 'reservation-confirmed';
                verification.textContent = 'Confirmed.';

            }
            cancel.addEventListener('click', onCancel);

            //cancel button when clicked showns Cancel in red color
            function onCancel(e) {
                liElement.remove();
                nextBtn.disabled = false;
                const verification = document.getElementById('verification');
                verification.className = 'reservation-cancelled';
                verification.textContent = 'Cancelled.';
            }
        })
    })
}





