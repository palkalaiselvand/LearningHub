/**
 * Inheritance in Java
 * 
 * Inheritance is a mechanism in which one class acquires the property of another class.
 * The class which inherits the properties of another is known as the subclass (derived class, child class),
 * and the class whose properties are inherited is known as the superclass (base class, parent class).
 */

class Vehicle {
    String make;
    String model;

    void startEngine() {
        System.out.println("Engine started.");
    }
}

class Car extends Vehicle {
    int numberOfDoors;

    void honk() {
        System.out.println("Car honking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.make = "Toyota";
        car.model = "Camry";
        car.numberOfDoors = 4;

        car.startEngine();
        car.honk();

        System.out.println("Make: " + car.make + ", Model: " + car.model + ", Number of Doors: " + car.numberOfDoors);
    }
}
