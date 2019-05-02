'use strict'

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.currentTemp = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
};

Thermostat.prototype.increaseTemp = function () {
  this.currentTemp++
};

Thermostat.prototype.decreaseTemp = function () {
  this.currentTemp--
};
