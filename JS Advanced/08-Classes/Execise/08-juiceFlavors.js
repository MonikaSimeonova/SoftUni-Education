function juiceFlavors(input){
    const juices = {};
    const bottles = {};
    for (const line of input) {
        const[juice,quantity] = line.split(' => ');
        let currentJuice = {};
        //const currentQuantity = Number(quantity);

        if(!(Object.values(juices).map((x)=>x.juice)).includes(juice)){
            currentJuice = {
                juice,
                quantity: Number(quantity)
            }
            juices[juice] = currentJuice;
        }else{
            currentJuice = juices[juice];
            currentJuice.quantity += Number(quantity)
        }
        let currentBottles = 0;

        while(currentJuice.quantity >= 1000){
            currentBottles++;
            currentJuice.quantity -= 1000;
        }
        if(!Object.values(bottles).map((x)=> x.juice).includes(juice) && currentBottles !== 0){
            currentJuice = {
                juice,
                bottles: currentBottles
            };
            bottles[juice] = currentJuice;
        }else if(Object.values(bottles).map((x)=> x.juice).includes(juice)){
            currentJuice = bottles[juice];
            currentJuice.bottles += currentBottles;
        }
    }

    for (const juice of Object.entries(bottles)) {
        console.log(`${juice[0]} => ${juice[1].bottles}`);
    }
}
juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])