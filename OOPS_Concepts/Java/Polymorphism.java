/**
 * Polymorphism in Java
 * 
 * Polymorphism is the ability of an object to take on many forms.
 * It allows one interface to be used for a general class of actions.
 * The specific action is determined by the exact nature of the situation.
 */

class Shape {
    void draw() {
        System.out.println("Drawing a shape.");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

class Square extends Shape {
    void draw() {
        System.out.println("Drawing a square.");
    }
}

class Triangle extends Shape {
    void draw() {
        System.out.println("Drawing a triangle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Square();
        Shape shape3 = new Triangle();

        shape1.draw();
        shape2.draw();
        shape3.draw();
    }
}
