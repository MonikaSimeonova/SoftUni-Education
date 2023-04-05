function solve() {
    const recipientName = document.getElementById('recipientName')
    const title = document.getElementById('title')
    const message = document.getElementById('message')

    const addBtn = document.getElementById('add')
    const resetBtn = document.getElementById('reset')

    addBtn.addEventListener('click', onAdd);
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault()
        recipientName.value = '';
        title.value = '';
        message.value = '';
    })

    function onAdd(e) {
        e.preventDefault()


        let recipient = recipientName.value
        let mailTitle = title.value
        let msg = message.value

        recipientName.value = '';
        title.value = '';
        message.value = '';

        if (recipient == '' || mailTitle == '' || msg == '') {
            return
        }

        const ul = document.getElementById("list")
        const li = document.createElement('li')
        li.innerHTML = `
        <h4>Title: ${mailTitle}</h4>
                    <h4>Recipient Name: ${recipient}</h4>
                    <span>${msg}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>`

        ul.appendChild(li);

        const sendBtn = li.querySelector('#send');
        sendBtn.addEventListener('click', onSend);

        const deleteBtn = document.getElementById('delete');
        deleteBtn.addEventListener('click', onDelete);


        function onSend() {
            const ulSend = document.querySelector('.sent-list');
            li.remove();
            const liSend = document.createElement('li')
            liSend.innerHTML = `
            <span>To: ${recipient}</span>
                        <span>Title: ${mailTitle}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>`
            ulSend.appendChild(liSend)
            liSend.querySelector('.delete').addEventListener('click', onDel);

            function onDel() {
                liSend.remove()
                const ulDel = document.querySelector('.delete-list')
                const liD = document.createElement('li')
                liD.innerHTML = `
                <span>To: ${recipient}</span>
                <span>Title: ${mailTitle}</span>`
    
                ulDel.appendChild(liD)
            }
        }

        function onDelete() {
            li.remove();
            const ulDelete = document.querySelector('.delete-list')
            const liDel = document.createElement('li')
            liDel.innerHTML = `
            <span>To: ${recipient}</span>
                        <span>Title: ${mailTitle}</span>`

            ulDelete.appendChild(liDel)
        }

    }

}
solve()