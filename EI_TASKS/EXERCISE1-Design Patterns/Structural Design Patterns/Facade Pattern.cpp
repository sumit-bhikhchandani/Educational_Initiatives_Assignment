#include <iostream>

// Subsystem Classes
class Amplifier {
public:
    void on() {
        std::cout << "Amplifier is ON" << std::endl; // Turn on amplifier
    }
    
    void off() {
        std::cout << "Amplifier is OFF" << std::endl; // Turn off amplifier
    }
};

class Projector {
public:
    void on() {
        std::cout << "Projector is ON" << std::endl; // Turn on projector
    }
    
    void off() {
        std::cout << "Projector is OFF" << std::endl; // Turn off projector
    }
};

// Facade Class
class HomeTheaterFacade {
    Amplifier* amplifier;
    Projector* projector;

public:
    HomeTheaterFacade() {
        amplifier = new Amplifier();
        projector = new Projector();
    }

    void watchMovie() {
        amplifier->on(); // Turn on amplifier
        projector->on(); // Turn on projector
        std::cout << "Ready to watch the movie!" << std::endl;
    }

    void endMovie() {
        amplifier->off(); // Turn off amplifier
        projector->off(); // Turn off projector
        std::cout << "Movie ended!" << std::endl;
    }

    ~HomeTheaterFacade() {
        delete amplifier; // Clean up
        delete projector; // Clean up
    }
};

int main() {
    HomeTheaterFacade homeTheater;
    homeTheater.watchMovie(); // Start watching movie
    homeTheater.endMovie(); // End movie

    return 0;
}
