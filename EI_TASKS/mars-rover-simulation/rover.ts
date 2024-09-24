// Import readline-sync for user input
import * as readlineSync from 'readline-sync';

// Interfaces for Command pattern
interface Command {
  execute(): void;
}

// Enum for directions
enum Direction {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W'
}

// Rover class
class Rover {
  private x: number;
  private y: number;
  private direction: Direction;
  private grid: Grid;

  constructor(x: number, y: number, direction: Direction, grid: Grid) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.grid = grid;
  }

  // Move forward based on the direction
  moveForward(): void {
    let [newX, newY] = this.getNextPosition();
    
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
    console.log(`Rover moved to (${this.x}, ${this.y}) facing ${this.direction}`);
  }

  // Turn the rover left
  turnLeft(): void {
    const leftTurns: { [key in Direction]: Direction } = {
      N: Direction.W,
      W: Direction.S,
      S: Direction.E,
      E: Direction.N
    };
    this.direction = leftTurns[this.direction];
    console.log(`Rover turned left, now facing ${this.direction}`);
  }

  // Turn the rover right
  turnRight(): void {
    const rightTurns: { [key in Direction]: Direction } = {
      N: Direction.E,
      E: Direction.S,
      S: Direction.W,
      W: Direction.N
    };
    this.direction = rightTurns[this.direction];
    console.log(`Rover turned right, now facing ${this.direction}`);
  }

  // Get the next position based on current direction
  private getNextPosition(): [number, number] {
    const movement: { [key in Direction]: [number, number] } = {
      N: [0, 1],
      E: [1, 0],
      S: [0, -1],
      W: [-1, 0]
    };
    const [dx, dy] = movement[this.direction];
    return [this.x + dx, this.y + dy];
  }

  // Send status report
  statusReport(): string {
    return `Rover is at (${this.x}, ${this.y}) facing ${this.direction}.`;
  }
}

// Command implementations
class MoveCommand implements Command {
  private rover: Rover;
  constructor(rover: Rover) {
    this.rover = rover;
  }
  execute(): void {
    this.rover.moveForward();
  }
}

class TurnLeftCommand implements Command {
  private rover: Rover;
  constructor(rover: Rover) {
    this.rover = rover;
  }
  execute(): void {
    this.rover.turnLeft();
  }
}

class TurnRightCommand implements Command {
  private rover: Rover;
  constructor(rover: Rover) {
    this.rover = rover;
  }
  execute(): void {
    this.rover.turnRight();
  }
}

// Grid class with obstacles
class Grid {
  private width: number;
  private height: number;
  private obstacles: [number, number][];

  constructor(width: number, height: number, obstacles: [number, number][]) {
    this.width = width;
    this.height = height;
    this.obstacles = obstacles;
  }

  // Check if the new position is out of bounds
  isOutOfBounds(x: number, y: number): boolean {
    return x < 0 || x >= this.width || y < 0 || y >= this.height;
  }

  // Check if there's an obstacle at the given position
  isObstacle(x: number, y: number): boolean {
    return this.obstacles.some(obstacle => obstacle[0] === x && obstacle[1] === y);
  }
}

// Function to take user input and create a Rover simulation
function startRoverSimulation() {
  // User input for grid size
  const gridWidth = parseInt(readlineSync.question('Enter grid width: '));
  const gridHeight = parseInt(readlineSync.question('Enter grid height: '));
  
  // User input for obstacles
  const obstacleCount = parseInt(readlineSync.question('Enter the number of obstacles: '));
  let obstacles: [number, number][] = [];
  for (let i = 0; i < obstacleCount; i++) {
    const x = parseInt(readlineSync.question(`Enter obstacle ${i + 1} x-coordinate: `));
    const y = parseInt(readlineSync.question(`Enter obstacle ${i + 1} y-coordinate: `));
    obstacles.push([x, y]);
  }

  const grid = new Grid(gridWidth, gridHeight, obstacles);

  // User input for Rover's starting position and direction
  const startX = parseInt(readlineSync.question('Enter Rover start x-coordinate: '));
  const startY = parseInt(readlineSync.question('Enter Rover start y-coordinate: '));
  const startDirection = readlineSync.question('Enter Rover start direction (N, S, E, W): ') as Direction;

  const rover = new Rover(startX, startY, startDirection, grid);

  // User input for commands
  const commandsInput = readlineSync.question('Enter Rover commands (M for Move, L for Left, R for Right): ').split('');
  
  const commands: Command[] = [];
  for (let command of commandsInput) {
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
        console.log(`Invalid command: ${command}`);
    }
  }

  // Execute commands
  commands.forEach(command => command.execute());

  // Print final status
  console.log(rover.statusReport());
}

// Start the simulation
startRoverSimulation();
