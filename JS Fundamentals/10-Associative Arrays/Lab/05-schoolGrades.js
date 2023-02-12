function grades(input){

    let studentsObj = {};

    for (const line of input) {
        let arrStudent = line.split(' ');
        let name = arrStudent.shift();
        let grades = arrStudent.map(x => Number(x))
        
       if(!studentsObj.hasOwnProperty(name)){
            studentsObj[name] = []
        }
        studentsObj[name] = studentsObj[name].concat(grades)
    }

    let sorted = Object.entries(studentsObj).sort((a,b) => a[0].localeCompare(b[0]));
    
    for (const [name,grades] of sorted) {
        let sum = 0
        for(let i =0; i < grades.length; i++){
            sum += grades[i];
        }
        let avg = sum / grades.length
        console.log(`${name}: ${avg.toFixed(2)}`);

    }
}