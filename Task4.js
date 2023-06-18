function Device(power) {
    this.power = power;
    this.isOn = false;
  }
  
  Device.prototype.turnOn = function() {
    this.isOn = true;
  };
  
  Device.prototype.turnOff = function() {
    this.isOn = false; 
  };
  
  function Lamp(power) {
    Device.call(this, power);
  }
  
  Lamp.prototype = Object.create(Device.prototype);
  Lamp.prototype.constructor = Lamp;
  
  function Computer(power) {
    Device.call(this, power);
    this.cpu = 'Intel i5';
  }
  
  Computer.prototype = Object.create(Device.prototype);
  Computer.prototype.constructor = Computer;
  
  let lamp = new Lamp(100);
  let computer = new Computer(500);
  
  lamp.turnOn(); 
  computer.turnOn();
  
  let totalPower = lamp.power + computer.power; 
  console.log(totalPower); // 600