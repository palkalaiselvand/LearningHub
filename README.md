# LearningHub

## OOPS Concepts in C#, Javascript, Python, and Java

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

### OOPS Concepts in Python

#### Encapsulation

Encapsulation in Python can be achieved using classes and private variables to hide the internal implementation details.

**Example:**

```python
class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name

    def set_name(self, name):
        self.__name = name

    def get_age(self):
        return self.__age

    def set_age(self, age):
        self.__age = age

person = Person("John", 30)
print(f"Name: {person.get_name()}, Age: {person.get_age()}")
```

#### Inheritance

Inheritance in Python can be achieved using classes to create a hierarchical relationship between classes.

**Example:**

```python
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start_engine(self):
        print("Engine started.")

class Car(Vehicle):
    def __init__(self, make, model, number_of_doors):
        super().__init__(make, model)
        self.number_of_doors = number_of_doors

    def honk(self):
        print("Car honking.")

car = Car("Toyota", "Camry", 4)
car.start_engine()
car.honk()
print(f"Make: {car.make}, Model: {car.model}, Number of Doors: {car.number_of_doors}")
```

#### Polymorphism

Polymorphism in Python can be achieved through method overriding and method overloading.

**Example:**

```python
class Shape:
    def draw(self):
        print("Drawing a shape.")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle.")

class Square(Shape):
    def draw(self):
        print("Drawing a square.")

shape1 = Circle()
shape2 = Square()

shape1.draw()
shape2.draw()
```

#### Abstraction

Abstraction in Python can be achieved by defining abstract classes and implementing them in concrete classes.

**Example:**

```python
from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def process_payment(self):
        pass

class CreditCardPayment(Payment):
    def process_payment(self):
        print("Processing credit card payment.")

class PayPalPayment(Payment):
    def process_payment(self):
        print("Processing PayPal payment.")

payment1 = CreditCardPayment()
payment2 = PayPalPayment()

payment1.process_payment()
payment2.process_payment()
```

### OOPS Concepts in Java

#### Encapsulation

Encapsulation in Java can be achieved using classes and private variables to hide the internal implementation details.

**Example:**

```java
public class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John");
        person.setAge(30);

        System.out.println("Name: " + person.getName() + ", Age: " + person.getAge());
    }
}
```

#### Inheritance

Inheritance in Java can be achieved using classes to create a hierarchical relationship between classes.

**Example:**

```java
public class Vehicle {
    private String make;
    private String model;

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void startEngine() {
        System.out.println("Engine started.");
    }
}

public class Car extends Vehicle {
    private int numberOfDoors;

    public int getNumberOfDoors() {
        return numberOfDoors;
    }

    public void setNumberOfDoors(int numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    }

    public void honk() {
        System.out.println("Car honking.");
    }

    public static void main(String[] args) {
        Car car = new Car();
        car.setMake("Toyota");
        car.setModel("Camry");
        car.setNumberOfDoors(4);

        car.startEngine();
        car.honk();

        System.out.println("Make: " + car.getMake() + ", Model: " + car.getModel() + ", Number of Doors: " + car.getNumberOfDoors());
    }
}
```

#### Polymorphism

Polymorphism in Java can be achieved through method overriding and method overloading.

**Example:**

```java
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape.");
    }
}

public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}

public class Square extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a square.");
    }

    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Square();

        shape1.draw();
        shape2.draw();
    }
}
```

#### Abstraction

Abstraction in Java can be achieved by defining abstract classes and implementing them in concrete classes.

**Example:**

```java
public abstract class Payment {
    public abstract void processPayment();
}

public class CreditCardPayment extends Payment {
    @Override
    public void processPayment() {
        System.out.println("Processing credit card payment.");
    }
}

public class PayPalPayment extends Payment {
    @Override
    public void processPayment() {
        System.out.println("Processing PayPal payment.");
    }

    public static void main(String[] args) {
        Payment payment1 = new CreditCardPayment();
        Payment payment2 = new PayPalPayment();

        payment1.processPayment();
        payment2.processPayment();
    }
}
```

### Links to OOPS Concepts in Different Languages

* [OOPS Concepts in C#](OOPS_Concepts/CSharp)
  * [Encapsulation](OOPS_Concepts/CSharp/Encapsulation.cs)
  * [Inheritance](OOPS_Concepts/CSharp/Inheritance.cs)
  * [Polymorphism](OOPS_Concepts/CSharp/Polymorphism.cs)
  * [Abstraction](OOPS_Concepts/CSharp/Abstraction.cs)

* [OOPS Concepts in Javascript](OOPS_Concepts/Javascript)
  * [Encapsulation](OOPS_Concepts/Javascript/Encapsulation.js)
  * [Inheritance](OOPS_Concepts/Javascript/Inheritance.js)
  * [Polymorphism](OOPS_Concepts/Javascript/Polymorphism.js)
  * [Abstraction](OOPS_Concepts/Javascript/Abstraction.js)

* [OOPS Concepts in Python](OOPS_Concepts/Python)
  * [Encapsulation](OOPS_Concepts/Python/Encapsulation.py)
  * [Inheritance](OOPS_Concepts/Python/Inheritance.py)
  * [Polymorphism](OOPS_Concepts/Python/Polymorphism.py)
  * [Abstraction](OOPS_Concepts/Python/Abstraction.py)

* [OOPS Concepts in Java](OOPS_Concepts/Java)
  * [Encapsulation](OOPS_Concepts/Java/Encapsulation.java)
  * [Inheritance](OOPS_Concepts/Java/Inheritance.java)
  * [Polymorphism](OOPS_Concepts/Java/Polymorphism.java)
  * [Abstraction](OOPS_Concepts/Java/Abstraction.java)
