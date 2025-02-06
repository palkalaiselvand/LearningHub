# Polymorphism in Python

class Shape:
    def draw(self):
        print("Drawing a shape.")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle.")

class Square(Shape):
    def draw(self):
        print("Drawing a square.")

class Triangle(Shape):
    def draw(self):
        print("Drawing a triangle.")

shape1 = Circle()
shape2 = Square()
shape3 = Triangle()

shape1.draw()
shape2.draw()
shape3.draw()
