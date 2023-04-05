function constructorCrew(obj) {
  const waterNeed = 0.1 * obj.weight * obj.experience;

  if (obj.dizziness === true) {
    obj.levelOfHydrated += waterNeed;
    obj.dizziness = false;
  }
  return obj;
}
constructorCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

function solve(worker){
  if(worker.dizziness) {
    return {...worker, levelOfHydrated: worker.weight * 0.1 * worker.experience, dizziness: false}
  };
  return worker;
}
solve({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
})