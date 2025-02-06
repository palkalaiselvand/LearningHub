# LearningHub

## OOPS Concepts in C# and Javascript

### Overview of Core OOPS Concepts

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure software programs. The core OOPS concepts are:

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

### OOPS Concepts in C#

#### Encapsulation

Encapsulation is the process of wrapping data and methods into a single unit called a class. It helps to protect the data from unauthorized access and modification.

**Example:**

```csharp
public class Person
{
    private string name;
    private int age;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public int Age
    {
        get { return age; }
        set { age = value; }
    }
}

public class Program
{
    public static void Main()
    {
        Person person = new Person();
        person.Name = "John";
        person.Age = 30;

        Console.WriteLine($"Name: {person.Name}, Age: {person.Age}");
    }
}
```

#### Inheritance

Inheritance is the process by which one class (derived class) inherits the properties and methods of another class (base class). It helps to reuse existing code and create a hierarchical relationship between classes.

**Example:**

```csharp
public class Vehicle
{
    public string Make { get; set; }
    public string Model { get; set; }

    public void StartEngine()
    {
        Console.WriteLine("Engine started.");
    }
}

public class Car : Vehicle
{
    public int NumberOfDoors { get; set; }

    public void Honk()
    {
        Console.WriteLine("Car honking.");
    }
}

public class Program
{
    public static void Main()
    {
        Car car = new Car();
        car.Make = "Toyota";
        car.Model = "Camry";
        car.NumberOfDoors = 4;

        car.StartEngine();
        car.Honk();

        Console.WriteLine($"Make: {car.Make}, Model: {car.Model}, Number of Doors: {car.NumberOfDoors}");
    }
}
```

#### Polymorphism

Polymorphism is the ability of a method to perform different actions based on the object that it is acting upon. It can be achieved through method overriding and method overloading.

**Example:**

```csharp
public class Shape
{
    public virtual void Draw()
    {
        Console.WriteLine("Drawing a shape.");
    }
}

public class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }
}

public class Square : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a square.");
    }
}

public class Program
{
    public static void Main()
    {
        Shape shape1 = new Circle();
        Shape shape2 = new Square();

        shape1.Draw();
        shape2.Draw();
    }
}
```

#### Abstraction

Abstraction is the process of hiding the implementation details and showing only the functionality to the user. It can be achieved through abstract classes and interfaces.

**Example:**

```csharp
public abstract class Payment
{
    public abstract void ProcessPayment();
}

public class CreditCardPayment : Payment
{
    public override void ProcessPayment()
    {
        Console.WriteLine("Processing credit card payment.");
    }
}

public class PayPalPayment : Payment
{
    public override void ProcessPayment()
    {
        Console.WriteLine("Processing PayPal payment.");
    }
}

public class Program
{
    public static void Main()
    {
        Payment payment1 = new CreditCardPayment();
        Payment payment2 = new PayPalPayment();

        payment1.ProcessPayment();
        payment2.ProcessPayment();
    }
}
```

### OOPS Concepts in Javascript

#### Encapsulation

Encapsulation in Javascript can be achieved using closures and modules to hide the internal implementation details.

**Example:**

```javascript
const ShoppingCart = (function() {
    let items = [];

    function addItem(item) {
        items.push(item);
    }

    function getTotal() {
        return items.reduce((total, item) => total + item.price, 0);
    }

    return {
        addItem: addItem,
        getTotal: getTotal
    };
})();

ShoppingCart.addItem({ name: 'Apple', price: 1.5 });
ShoppingCart.addItem({ name: 'Banana', price: 2.0 });

console.log(`Total: $${ShoppingCart.getTotal()}`);
```

#### Inheritance

Inheritance in Javascript can be achieved using prototype-based inheritance to create a chain of objects.

**Example:**

```javascript
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.startEngine = function() {
    console.log('Engine started.');
};

function Car(make, model, numberOfDoors) {
    Vehicle.call(this, make, model);
    this.numberOfDoors = numberOfDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
    console.log('Car honking.');
};

const car = new Car('Toyota', 'Camry', 4);
car.startEngine();
car.honk();

console.log(`Make: ${car.make}, Model: ${car.model}, Number of Doors: ${car.numberOfDoors}`);
```

#### Polymorphism

Polymorphism in Javascript can be achieved through method overriding and method overloading.

**Example:**

```javascript
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

const shape1 = new Circle();
const shape2 = new Square();

shape1.draw();
shape2.draw();
```

#### Abstraction

Abstraction in Javascript can be achieved by defining interfaces and implementing them in concrete classes.

**Example:**

```javascript
class Payment {
    processPayment() {
        throw new Error('Method not implemented.');
    }
}

class CreditCardPayment extends Payment {
    processPayment() {
        console.log('Processing credit card payment.');
    }
}

class PayPalPayment extends Payment {
    processPayment() {
        console.log('Processing PayPal payment.');
    }
}

const payment1 = new CreditCardPayment();
const payment2 = new PayPalPayment();

payment1.processPayment();
payment2.processPayment();
```
