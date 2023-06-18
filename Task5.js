class Device {
    constructor(power) {
      this.power = power;
      this.isOn = false;
    }
    
    turnOn() {
      this.isOn = true;
    }
    
    turnOff() {
      this.isOn = false; 
    }
  }
  
  class Lamp extends Device {
    constructor(power) {
      super(power);
    }
  }
  
  class Computer extends Device {
    constructor(power) {
      super(power);
      this.cpu = 'Intel i5';
    }
  }
  
  let lamp = new Lamp(100);
  let computer = new Computer(500);
  
  lamp.turnOn(); 
  computer.turnOn();
  
  let totalPower = lamp.power + computer.power;
  console.log(totalPower); // 600