#include <iostream>
#include <vector>
#include <string>

class Observer {
public:
    virtual void update(const std::string& weather) = 0; // Abstract method to update weather
};

class WeatherStation {
    std::vector<Observer*> observers; // List of observers
    std::string weather;

public:
    void registerObserver(Observer* observer) {
        observers.push_back(observer); // Register an observer
    }

    void setWeather(const std::string& newWeather) {
        weather = newWeather; // Set new weather
        notifyObservers(); // Notify all observers
    }

    void notifyObservers() {
        for (Observer* observer : observers) {
            observer->update(weather); // Call update on each observer
        }
    }
};

// Concrete Observer
class MobileDevice : public Observer {
public:
    void update(const std::string& weather) override {
        std::cout << "Mobile Device: Weather updated to " << weather << std::endl;
    }
};

int main() {
    WeatherStation station;
    MobileDevice mobile;

    station.registerObserver(&mobile); // Register mobile device as an observer
    station.setWeather("Sunny"); // Update weather to Sunny

    return 0;
}
