# EXERCISE 1

# Design Patterns Assignment

## Introduction
This project demonstrates the use of various design patterns in software development. The patterns included are:

1. **Behavioral Design Patterns**
   - Observer Pattern
   - Command Pattern

2. **Creational Design Patterns**
   - Singleton Pattern
   - Factory Pattern

3. **Structural Design Patterns**
   - Adapter Pattern
   - Facade Pattern

Each pattern is illustrated with a simple description.

## Behavioral Design Patterns

### 1. Observer Pattern
- **Description**: This pattern allows one class (the subject) to notify other classes (observers) when its state changes. This is useful for keeping multiple parts of a program updated without creating tight dependencies between them.
- **Use Case**: A weather station that notifies mobile devices when the weather changes. This way, all registered devices receive updates whenever the weather changes.

### 2. Command Pattern
- **Description**: The Command Pattern turns a request into a stand-alone object that contains all information about the request. This allows for parameterizing clients with queues, requests, and operations.
- **Use Case**: A smart home controller that can execute commands such as turning lights on or off. Each command is encapsulated as an object, making it easy to add new commands or change existing ones.

---

## Creational Design Patterns

### 3. Singleton Pattern
- **Description**: The Singleton Pattern ensures that a class has only one instance and provides a global access point to it. This is useful when exactly one object is needed to coordinate actions across the system.
- **Use Case**: A logger class that maintains a single logging instance throughout the application. All parts of the application can log messages to the same logger, ensuring consistent logging.

### 4. Factory Pattern
- **Description**: The Factory Pattern provides an interface for creating objects but allows subclasses to alter the type of objects that will be created. This pattern promotes loose coupling in the code.
- **Use Case**: A shape factory that creates different shapes (like circles or squares) based on input. Clients can request a shape without knowing how it is created.

---

## Structural Design Patterns

### 5. Adapter Pattern
- **Description**: The Adapter Pattern allows incompatible interfaces to work together. It acts as a bridge between two incompatible systems or classes.
- **Use Case**: A media player that can play different formats (like VLC and MP4) using adapters. The adapter allows the media player to work with different player types without changing its interface.

### 6. Facade Pattern
- **Description**: The Facade Pattern provides a simplified interface to a complex subsystem, hiding its complexities and making it easier to use.
- **Use Case**: A home theater system that simplifies turning on multiple devices with one control. Instead of using several remotes, the facade allows users to operate all devices easily.

---

## Conclusion
This assignment showcases the implementation of various design patterns in software development. Each pattern serves a unique purpose and helps make the software design more efficient and maintainable. Understanding these patterns will enhance your software development skills and enable you to create better-organized code.

# EXERCISE 2

# Mars Rover Project

## Overview
This project simulates a Mars Rover that can navigate a grid-based terrain. The rover can move forward, turn left, and turn right while avoiding obstacles.This project I originally created in javascript but converted to typescript taking some help as it was mandatory. 

## Features
- **Movement**: The rover can move one step forward in the direction it's facing.
- **Turning**: The rover can turn left or right to change its direction.
- **Obstacle Detection**: The rover will not move into obstacles, ensuring it stays safe.
- **Status Report**: The rover can report its current position and direction.

## How It Works
1. **Initialize the Rover**: You start with a position (x, y) and a direction (N, S, E, W).
2. **Commands**: 
   - 'M' moves the rover forward.
   - 'L' turns the rover left.
   - 'R' turns the rover right.
3. **Grid Size**: The rover operates within a defined grid size (e.g., 10x10).
4. **Obstacles**: You can define obstacles on the grid that the rover needs to avoid.


## Example
- **Initial Position**: (0, 0, N) 
- **Commands**: ['M', 'M', 'R', 'M', 'L', 'M']
- **Final Position**: (1, 3, E)
- **Status Report**: "Rover is at (1, 3) facing East. No Obstacles detected."

## Code Structure
- `mars_rover.cpp`: Contains the implementation of the Mars Rover simulation.

## Contributing
You can contribute by suggesting improvements or reporting issues.

## License
This project is licensed under the MIT License.
