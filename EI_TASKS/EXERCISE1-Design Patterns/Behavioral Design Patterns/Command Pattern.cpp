#include <iostream>

// Command Interface
class Command {
public:
    virtual void execute() = 0; // Abstract method to execute command
};

// Receiver
class Light {
public:
    void turnOn() {
        std::cout << "Light is ON" << std::endl;
    }
    
    void turnOff() {
        std::cout << "Light is OFF" << std::endl;
    }
};

// Concrete Command to turn on the light
class LightOnCommand : public Command {
    Light* light;
public:
    LightOnCommand(Light* l) : light(l) {}
    void execute() override {
        light->turnOn(); // Execute command
    }
};

// Concrete Command to turn off the light
class LightOffCommand : public Command {
    Light* light;
public:
    LightOffCommand(Light* l) : light(l) {}
    void execute() override {
        light->turnOff(); // Execute command
    }
};

class SmartHomeController {
public:
    void executeCommand(Command* command) {
        command->execute(); // Execute the command
    }
};

int main() {
    Light livingRoomLight;
    LightOnCommand lightOn(&livingRoomLight);
    LightOffCommand lightOff(&livingRoomLight);
    SmartHomeController controller;

    controller.executeCommand(&lightOn); // Turn on the light
    controller.executeCommand(&lightOff); // Turn off the light

    return 0;
}
