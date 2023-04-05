function solve() {
    const nameInput =  document.getElementById('recipientName')
    const titleInput =  document.getElementById('title')
    const messageInput =  document.getElementById('message')
    const list = document.getElementById('list')
    const deleteList = document.querySelector('.delete-list')
    document.getElementById('add').addEventListener('click', createMail)
    document.getElementById('reset').addEventListener('click', onReset)


    function createMail(e){
        e.preventDefault();
        const name = nameInput.value
        const title = titleInput.value
        const message = messageInput.value
       

        if(name == '' || title == '' || message == ''){
            return
        }
        const element = document.createElement('li');
        element.innerHTML = `
        <h4>Title: ${title}</h4>
                    <h4>Recipient Name: ${name}</h4>
                    <span>${message}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>`

        list.appendChild(element)
        

        element.querySelector('#delete').addEventListener('click', deleteMail)
        
    
        function deleteMail(){
            const deketedMailElemtn = document.createElement('li')
            deketedMailElemtn.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`

            deleteList.appendChild(deketedMailElemtn)
            element.remove()
        }
        resetInput()
    }

    function sendMail(){
        const sendMailEl = document.createElement('li')
        sendMailEl.innerHTML = `
        <span>To: ${name}</span>
                        <span>Title: ${title}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>`

                        sendMailEl.querySelector('.delete').addEventListener('click', ()=>{

                        })      
    }

   
    function onReset(){
        e.preventDefault();
        resetInput()
    }

    function resetInput(){
        nameInput.value = '';
        messageInput.value = '';
        titleInput.value = '';

    }


}
solve()