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
    throw ("Max temp reached")
  } else {
    this.currentTemp++;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  this.currentTemp--
};
