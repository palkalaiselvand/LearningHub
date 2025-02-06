using System;

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
