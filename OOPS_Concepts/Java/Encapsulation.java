/**
 * Encapsulation in Java
 * 
 * Encapsulation is the process of wrapping data (variables) and code (methods) together as a single unit.
 * In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class.
 * Therefore, it is also known as data hiding.
 */

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
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John");
        person.setAge(30);

        System.out.println("Name: " + person.getName() + ", Age: " + person.getAge());
    }
}
