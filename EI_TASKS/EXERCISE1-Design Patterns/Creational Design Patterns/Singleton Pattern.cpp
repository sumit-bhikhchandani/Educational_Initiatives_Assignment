#include <iostream>

class Logger {
private:
    static Logger* instance; // Static instance

    Logger() {} // Private constructor to prevent instantiation

public:
    static Logger* getInstance() {
        if (!instance) {
            instance = new Logger(); // Create instance if it doesn't exist
        }
        return instance;
    }

    void log(const std::string& message) {
        std::cout << "Log: " << message << std::endl; // Log message
    }
};

Logger* Logger::instance = nullptr; // Initialize static instance

int main() {
    Logger* logger = Logger::getInstance(); // Get the logger instance
    logger->log("Application started."); // Log a message
    logger->log("Application ended."); // Log another message

    return 0;
}
