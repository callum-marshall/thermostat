'use strict'

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.currentTemp = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSave = true;
  this.PS_ON_MAX_TEMP = 25;
  this.PS_OFF_MAX_TEMP = 32;
};

Thermostat.prototype.increaseTemp = function () {
  if (this.powerSave === true && this.currentTemp === 25) {
    throw ("Powersave Max temp reached");
  } else if (this.powerSave === false && this.currentTemp === 32) {
    throw ("Max temp reached");
  } else {
    this.currentTemp++;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.currentTemp === this.MIN_TEMP) {
    throw ('Min temp reached');
  } else {
    this.currentTemp--;
  }
};

Thermostat.prototype.reset = function () {
  this.currentTemp = this.DEFAULT_TEMP;
};

Thermostat.prototype.printUsage = function () {
  if (this.currentTemp < 18) {
    return "Low Usage";
  } else if (this.currentTemp < 25) {
    return "Medium Usage";
  } else {
    return "High Usage";
  }
};

Thermostat.prototype.powerSaveSwitch = function () {
  this.powerSave =! this.powerSave;
  if (this.currentTemp >= this.PS_ON_MAX_TEMP) {
    this.currentTemp = this.PS_ON_MAX_TEMP;
  } 
};

Thermostat.prototype.powerSaveStatus = function () {
  return (this.powerSave === true ? "(ON)" : "(OFF)");
};
