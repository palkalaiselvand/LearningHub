function Shape() {}

Shape.prototype.draw = function() {
    console.log('Drawing a shape.');
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('Drawing a circle.');
};

function Square() {}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function() {
    console.log('Drawing a square.');
};

function Triangle() {}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.draw = function() {
    console.log('Drawing a triangle.');
};

const shape1 = new Circle();
const shape2 = new Square();
const shape3 = new Triangle();

shape1.draw();
shape2.draw();
shape3.draw();
