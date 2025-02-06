/**
 * Abstraction in Java
 * 
 * Abstraction is the process of hiding the implementation details and showing only the functionality to the user.
 * It can be achieved through abstract classes and interfaces.
 */

abstract class Payment {
    abstract void processPayment();
}

class CreditCardPayment extends Payment {
    void processPayment() {
        System.out.println("Processing credit card payment.");
    }
}

class PayPalPayment extends Payment {
    void processPayment() {
        System.out.println("Processing PayPal payment.");
    }
}

interface Logger {
    void logMessage(String message);
}

class FileLogger implements Logger {
    public void logMessage(String message) {
        System.out.println("Logging message to file: " + message);
    }
}

class ConsoleLogger implements Logger {
    public void logMessage(String message) {
        System.out.println("Logging message to console: " + message);
    }
}

public class Main {
    public static void main(String[] args) {
        Payment payment1 = new CreditCardPayment();
        Payment payment2 = new PayPalPayment();

        payment1.processPayment();
        payment2.processPayment();

        Logger fileLogger = new FileLogger();
        Logger consoleLogger = new ConsoleLogger();

        fileLogger.logMessage("This is a file log message.");
        consoleLogger.logMessage("This is a console log message.");
    }
}
