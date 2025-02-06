# Encapsulation in Python

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

person.set_name("Jane")
person.set_age(25)
print(f"Name: {person.get_name()}, Age: {person.get_age()}")
