using System;

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

public interface ILogger
{
    void LogMessage(string message);
}

public class FileLogger : ILogger
{
    public void LogMessage(string message)
    {
        Console.WriteLine($"Logging message to file: {message}");
    }
}

public class ConsoleLogger : ILogger
{
    public void LogMessage(string message)
    {
        Console.WriteLine($"Logging message to console: {message}");
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

        ILogger fileLogger = new FileLogger();
        ILogger consoleLogger = new ConsoleLogger();

        fileLogger.LogMessage("This is a file log message.");
        consoleLogger.LogMessage("This is a console log message.");
    }
}
