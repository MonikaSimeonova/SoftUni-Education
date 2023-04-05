function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestRestorant = document.querySelector('#bestRestorant>p')
   const workers = document.querySelector('#outputs #workers p')


   function onClick () {
      let arr = JSON.parse(input.value);
      let restorants = {};

      arr.forEach((line)=>{
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArr) {
            let workerToken = worker.split(' ');
            const salary = Number(workerToken[1]);
            workers.push({name: workerToken[0], salary})
         }
        

         if(restorants[name]){
            workers = workers.concat(restorants[name].workers)
         }
         workers.sort((worker1,worker2)=> worker2.salary - worker1.salary)
         let bestSalary = workers[0].salary;
         let avegareSalary = workers.reduce((sum,worker)=> sum + worker.salary, 0) / workers.length;

         restorants[name] = {
            workers,
            avegareSalary,
            bestSalary
         }
      });
      

      let bestRestorantSalary = 0;
      let best = undefined;
      for (const name in restorants) {
        if(restorants[name].avegareSalary > bestRestorantSalary){
         bestRestorantSalary = restorants[name].avegareSalary;
         best = {name, ...restorants[name]}
        }
      }
      bestRestorant.textContent = `Name: ${best.name} Average Salary: ${best.avegareSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`
      let workersRes = [];
      best.workers.forEach((worker)=>{
         workersRes.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })
      workers.innerText = workersRes.join('')
   }
}

// ot Ivo

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let line of input) {
         let restorantInfo = line.split(' - ');
         let restorantName = restorantInfo.shift();
         let workersData = restorantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name,salary] = worker.split(' ');
            if(!output.hasOwnProperty(restorantName)){
               output[restorantName] = {};
            }
            if(output.hasOwnProperty(restorantName)){
                  output[restorantName][name] = Number(salary);
            }
         }
      }
      let entries = Object.entries(output);

      for(let entry of entries){
         let key = entry[0];
         let values = Object.values(entry[1]);

         for(let salary of values){
            totalSalary += salary
         }
         avgSalary = totalSalary / values.length;

         if(avgSalary > currAvgSalary){
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1])
      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)} `;
      document.querySelector('#workers p').textContent = print;
   }
}