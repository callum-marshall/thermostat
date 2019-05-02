function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.currentTemp = this.DEFAULT_TEMP;
};

Thermostat.prototype.increaseTemp = function () {
  this.currentTemp++
};
