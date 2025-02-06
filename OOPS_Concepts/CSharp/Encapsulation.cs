using System;

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
