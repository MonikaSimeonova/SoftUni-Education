
const url = `http://localhost:3030/jsonstore/collections/students`
const tbody = document.querySelector('tbody')
async function students(){

    const response = await fetch(url);
    const data = await response.json();
    
    const students = Object.values(data);
    

    students.forEach(s=>{
        
        tbody.innerHTML += `
        <tr>
            <th>${s.firstName}</th>
            <th>${s.lastName}</th>
            <th>${s.facultyNumber}</th>
            <th>${s.grade}</th>
        </tr> `
    })
    document.getElementById('form').addEventListener('submit', addStudent);
}

async function addStudent(e){
    e.preventDefault();
 
    const formData = new FormData(document.getElementById('form'));
    const {firstName, lastName, facultyNumber, grade} = Object.fromEntries(formData);
    
    let res = await fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({firstName,lastName,facultyNumber,grade})
    });
    let data = await res.json()
    
    tbody.innerHTML += `
        <tr>
            <th>${data.firstName}</th>
            <th>${data.lastName}</th>
            <th>${data.facultyNumber}</th>
            <th>${data.grade}</th>
        </tr> `
}
students()