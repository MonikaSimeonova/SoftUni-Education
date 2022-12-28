function solve (arr){

    let numberAnswerd = Number(arr[0]) + Number(arr[1]) + Number(arr[2])//15
    let students = Number(arr[3])//20
    let left = 0
    let hour = 0
    let test = 0

    for (let i = 0; 0 < students; i++ ){
        hour += 1

        left = students - numberAnswerd 

        if(left <= 0){
            students = 0
        }
        students = left

        test += numberAnswerd
           

        
        if (hour % 4 == 0 ){
            hour += 1
        }
    }
    console.log(`Time needed: ${hour}h.`);
}
solve(['5','6','4','20'])
solve(['1','2','3','45'])
solve(['1','2','3','45'])

/*Three employees are working on the reception all day. Each of them can handle a different number of students per hour. Your task is to calculate how much time it will take to answer all the questions of a given number of students.
First, you will receive 3 lines with integers, representing the number of students that each employee can help per hour. On the following line, you will receive students count as a single integer. 
Every fourth hour, all employees have a break, so they don't work for an hour. It is the only break for the employees, because they don't need rest, nor have a personal life. Calculate the time needed to answer all the student's questions and print it in the following format: "Time needed: {time}h."
Input / Constraints
•	On the first three lines -  each employee efficiency -  integer in the range [1 - 100]
•	On the fourth line - students count – integer in the range [0 – 10000]
•	Input will always be valid and in the range specified
Output
•	Print a single line: "Time needed: {time}h."
•	Allowed working time / memory: 100ms / 16MB
 */