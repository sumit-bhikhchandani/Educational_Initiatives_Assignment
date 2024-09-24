#include <iostream>

// Shape Interface
class Shape {
public:
    virtual void draw() = 0; // Abstract method to draw shape
};

// Concrete Shapes
class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing Circle" << std::endl; // Draw Circle
    }
};

class Square : public Shape {
public:
    void draw() override {
        std::cout << "Drawing Square" << std::endl; // Draw Square
    }
};

// Shape Factory
class ShapeFactory {
public:
    static Shape* createShape(const std::string& shapeType) {
        if (shapeType == "Circle") {
            return new Circle(); // Return Circle instance
        } else if (shapeType == "Square") {
            return new Square(); // Return Square instance
        }
        return nullptr; // Return nullptr for invalid shapeType
    }
};

int main() {
    Shape* shape1 = ShapeFactory::createShape("Circle"); // Create Circle
    shape1->draw(); // Draw Circle

    Shape* shape2 = ShapeFactory::createShape("Square"); // Create Square
    shape2->draw(); // Draw Square

    delete shape1; // Clean up
    delete shape2; // Clean up

    return 0;
}
