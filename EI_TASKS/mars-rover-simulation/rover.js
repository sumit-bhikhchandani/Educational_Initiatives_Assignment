"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import readline-sync for user input
var readlineSync = require("readline-sync");
// Enum for directions
var Direction;
(function (Direction) {
    Direction["N"] = "N";
    Direction["S"] = "S";
    Direction["E"] = "E";
    Direction["W"] = "W";
})(Direction || (Direction = {}));
// Rover class
var Rover = /** @class */ (function () {
    function Rover(x, y, direction, grid) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.grid = grid;
    }
    // Move forward based on the direction
    Rover.prototype.moveForward = function () {
        var _a = this.getNextPosition(), newX = _a[0], newY = _a[1];
        if (this.grid.isObstacle(newX, newY)) {
            console.log("Obstacle detected! Rover cannot move.");
            return;
        }
        if (this.grid.isOutOfBounds(newX, newY)) {
            console.log("Out of bounds! Rover cannot move.");
            return;
        }
        this.x = newX;
        this.y = newY;
        console.log("Rover moved to (".concat(this.x, ", ").concat(this.y, ") facing ").concat(this.direction));
    };
    // Turn the rover left
    Rover.prototype.turnLeft = function () {
        var leftTurns = {
            N: Direction.W,
            W: Direction.S,
            S: Direction.E,
            E: Direction.N
        };
        this.direction = leftTurns[this.direction];
        console.log("Rover turned left, now facing ".concat(this.direction));
    };
    // Turn the rover right
    Rover.prototype.turnRight = function () {
        var rightTurns = {
            N: Direction.E,
            E: Direction.S,
            S: Direction.W,
            W: Direction.N
        };
        this.direction = rightTurns[this.direction];
        console.log("Rover turned right, now facing ".concat(this.direction));
    };
    // Get the next position based on current direction
    Rover.prototype.getNextPosition = function () {
        var movement = {
            N: [0, 1],
            E: [1, 0],
            S: [0, -1],
            W: [-1, 0]
        };
        var _a = movement[this.direction], dx = _a[0], dy = _a[1];
        return [this.x + dx, this.y + dy];
    };
    // Send status report
    Rover.prototype.statusReport = function () {
        return "Rover is at (".concat(this.x, ", ").concat(this.y, ") facing ").concat(this.direction, ".");
    };
    return Rover;
}());
// Command implementations
var MoveCommand = /** @class */ (function () {
    function MoveCommand(rover) {
        this.rover = rover;
    }
    MoveCommand.prototype.execute = function () {
        this.rover.moveForward();
    };
    return MoveCommand;
}());
var TurnLeftCommand = /** @class */ (function () {
    function TurnLeftCommand(rover) {
        this.rover = rover;
    }
    TurnLeftCommand.prototype.execute = function () {
        this.rover.turnLeft();
    };
    return TurnLeftCommand;
}());
var TurnRightCommand = /** @class */ (function () {
    function TurnRightCommand(rover) {
        this.rover = rover;
    }
    TurnRightCommand.prototype.execute = function () {
        this.rover.turnRight();
    };
    return TurnRightCommand;
}());
// Grid class with obstacles
var Grid = /** @class */ (function () {
    function Grid(width, height, obstacles) {
        this.width = width;
        this.height = height;
        this.obstacles = obstacles;
    }
    // Check if the new position is out of bounds
    Grid.prototype.isOutOfBounds = function (x, y) {
        return x < 0 || x >= this.width || y < 0 || y >= this.height;
    };
    // Check if there's an obstacle at the given position
    Grid.prototype.isObstacle = function (x, y) {
        return this.obstacles.some(function (obstacle) { return obstacle[0] === x && obstacle[1] === y; });
    };
    return Grid;
}());
// Function to take user input and create a Rover simulation
function startRoverSimulation() {
    // User input for grid size
    var gridWidth = parseInt(readlineSync.question('Enter grid width: '));
    var gridHeight = parseInt(readlineSync.question('Enter grid height: '));
    // User input for obstacles
    var obstacleCount = parseInt(readlineSync.question('Enter the number of obstacles: '));
    var obstacles = [];
    for (var i = 0; i < obstacleCount; i++) {
        var x = parseInt(readlineSync.question("Enter obstacle ".concat(i + 1, " x-coordinate: ")));
        var y = parseInt(readlineSync.question("Enter obstacle ".concat(i + 1, " y-coordinate: ")));
        obstacles.push([x, y]);
    }
    var grid = new Grid(gridWidth, gridHeight, obstacles);
    // User input for Rover's starting position and direction
    var startX = parseInt(readlineSync.question('Enter Rover start x-coordinate: '));
    var startY = parseInt(readlineSync.question('Enter Rover start y-coordinate: '));
    var startDirection = readlineSync.question('Enter Rover start direction (N, S, E, W): ');
    var rover = new Rover(startX, startY, startDirection, grid);
    // User input for commands
    var commandsInput = readlineSync.question('Enter Rover commands (M for Move, L for Left, R for Right): ').split('');
    var commands = [];
    for (var _i = 0, commandsInput_1 = commandsInput; _i < commandsInput_1.length; _i++) {
        var command = commandsInput_1[_i];
        switch (command) {
            case 'M':
                commands.push(new MoveCommand(rover));
                break;
            case 'L':
                commands.push(new TurnLeftCommand(rover));
                break;
            case 'R':
                commands.push(new TurnRightCommand(rover));
                break;
            default:
                console.log("Invalid command: ".concat(command));
        }
    }
    // Execute commands
    commands.forEach(function (command) { return command.execute(); });
    // Print final status
    console.log(rover.statusReport());
}
// Start the simulation
startRoverSimulation();
