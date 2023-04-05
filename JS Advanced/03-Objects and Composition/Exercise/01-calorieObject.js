function calorieObject(arr) {
  const objCalories = {};

  for (let i = 0; i < arr.length; i++) {
    let product = arr[i];
    let calorie = arr[i + 1];
    objCalories[product] = Number(calorie);
    i++;
  }
  console.log(objCalories);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

function solve(arr){
  return arr.reduce((acc,curr,index)=>{
    if(index % 2 === 0) acc[curr] = Number(arr[index-1])
    return acc;
  }, {})
}
