async function getInfo() {
    const stopID = document.getElementById('stopId').value;
    let busesListElemnt = document.getElementById('buses');
    busesListElemnt.innerHTML = '';
    const url = ` http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    try{
        const response = await fetch(url);

        if(response.ok == false){
            let err = new Error();
            err.status = response.status;
            err.statusText = response.statusText;
            throw err;
        }
        const data = await response.json();
        document.getElementById('stopName').textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time])=>{
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesListElemnt.appendChild(liEl);
        })
    }
    catch(err){
        document.getElementById('stopName').textContent = 'Error';
    }
}