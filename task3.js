const rectangle = {
    height: 5,
    width: 5,
    get getPerimeter() {
        return `${2*(this.height + this.width)} см`;
    },
    get getRectangleArea() {
        return `${this.height + this.width} см`;
    },
    set setRectangleHeight(height) {
        if (height.isNaN) {
            console.log('Введите число')
        } else {
            this.height = height;
        }
    },
    set setRectangleWidth(width) {
        if (width.isNaN) {
            console.log('Введите число')
        } else {
            this.width = width;
        }
    }    
}


console.log(rectangle.getPerimeter);
console.log(rectangle.getRectangleArea);

rectangle.setRectangleHeight = 8;
console.log(rectangle.height);

rectangle.setRectangleWidth = 10;
console.log(rectangle.width);

console.log(rectangle.getPerimeter);
console.log(rectangle.getRectangleArea);

