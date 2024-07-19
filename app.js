class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year =year;
    }
  // Method to display vehicle details
    displayDetails() {
        console.log(`Vehicle Details: ${this.year} ${this.make} ${this.model}`);
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
    myFirstVehicle.honk(); // "Beep."
    myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

class Car extends Vehicle {
    constructor(make, model, year) {
          super(make, model, year); // Call the parent class's constructor
          this.numWheels = 4; // Add the numWheels property specific to Car
    }
      
        // Method to display car details including numWheels
    displayDetails() {
          super.displayDetails(); // Call the parent class's displayDetails method
          console.log(`Number of Wheels: ${this.numWheels}`);
    }
}
      
   
//class Vehicle {}: This is the base class for all vehicles.   
                            
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Vehicle Details: ${this.year} ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Number of Wheels: ${this.numWheels}`);
  }
}


// class Motorcycle extends Vehicle {}: This declares that Motorcycle is a subclass of Vehicle.

class Motorcycle extends Vehicle {
  constructor(make, model, year) { //The constructor for the Motorcycle class.
    super(make, model, year); //: Calls the constructor of the parent Vehicle class to initialize the make, model, and year properties.
    this.numWheels = 2; //Adds a property numWheels to the Motorcycle instance and sets its value to 2.
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Number of Wheels: ${this.numWheels}`);
  }

  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we’re full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}

// Example usage:
const myGarage = new Garage(2);
const myCar = new Car('Toyota', 'Corolla', 2020);
const myBike = new Motorcycle('Harley-Davidson', 'Street 750', 2021);

console.log(myGarage.add(myCar)); // Output: Vehicle added!
console.log(myGarage.add(myBike)); // Output: Vehicle added!
console.log(myGarage.add(myBike)); // Output: Sorry, we’re full.
console.log(myGarage.add({})); // Output: Only vehicles are allowed in here!
                              
                              