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
