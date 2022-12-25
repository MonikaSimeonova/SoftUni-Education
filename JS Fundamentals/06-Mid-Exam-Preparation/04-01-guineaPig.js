function guineaPig(arr){

    let food = Number(arr.shift())*1000
    let hay = Number(arr.shift())*1000
    let cover = Number(arr.shift())*1000
    let weigthPig = Number(arr.shift())*1000
    let eatPerday = 300
    let counter = 0
    let percent = 0
    let coverCorection = 0

    for(let i = 1; i <= 30; i++){
        counter++
        food -= eatPerday
        if(counter % 2 == 0){
            percent = food * 0.05
            hay -= percent
        }
        if(counter % 3 == 0){
            coverCorection = (weigthPig * 1/3).toFixed(2)
            cover -= coverCorection
        }
        if(food <= 0 || cover <= 0 || hay <= 0){
            console.log('Merry must go to the pet store!');
            break;
        }


    }
    if(food > 0 && cover > 0 && hay > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    }



}
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])
/*On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
Calculate whether the quantity of food, hay, and cover, will be enough for a month.
If Merry runs out of food, hay, or cover, stop the program!
Input
•	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]
•	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]
Output
•	If the food, the hay, and the cover are enough, print:
o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
•	If one of the things is not enough, print:
o	"Merry must go to the pet store!"
The output values must be formatted to the second decimal place!
 */

