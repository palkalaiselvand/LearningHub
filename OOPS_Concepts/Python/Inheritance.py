# Inheritance in Python

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
