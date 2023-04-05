//with class

class Rectangle {
    constructor(width, height, color) {
        let splited = color.split('');
        let capital = splited[0].toUpperCase();
        color = capital + color.slice(1,)

        this.width = width;
        this.height = height;
        this.color = color;

    }
    calcArea(width, height) {
        width = this.width;
        height = this.height;
        return this.width * this.height
    }
}

let res = new Rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


//with object
function rectangle(width, height, color) {
    let splited = color.split('');
    let capital = splited[0].toUpperCase();
    color = capital + color.slice(1,)
    const obj = {
        width,
        height,
        color,
        calcArea() {
            return width * height
        }
    }
    return obj;
}


let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
