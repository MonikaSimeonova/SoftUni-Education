function adAstra(input) {

    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
    let productArray = [];
    let totalCalories = 0;
    let productInfo = pattern.exec(input);

    while (productInfo !== null) {

        let product = productInfo.groups.name;
        let productCalories = Number(productInfo.groups.calories);
        let expirationalDate = productInfo.groups.date;

        totalCalories += productCalories;

        productArray.push(`Item: ${product}, Best before: ${expirationalDate}, Nutrition: ${productCalories}`)

        productInfo = pattern.exec(input);
    }
    
    let days = Math.trunc(totalCalories / 2000);
    
    console.log(`You have food to last you for: ${days} days!`);

    for (const products of productArray) {
        console.log(products);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)