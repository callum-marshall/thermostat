'use strict';

describe('thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.DEFAULT_TEMP).toEqual(20);
  });

  it('can increase the temperature by 1 degree', function() {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp).toEqual(21);
  });

  it('can decrease the temperature by 1 degree', function() {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp).toEqual(19);
  });

  it('has a minimum temperature', function() {
    expect(thermostat.MIN_TEMP).toEqual(10);
  });

  it('power save mode is on by default', function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it('maximum temperature in powersave mode equals 25', function() {
    expect(thermostat.PS_ON_MAX_TEMP).toEqual(25);
  });

  it('maximum temperature in normal mode equals 32', function() {
    expect(thermostat.PS_OFF_MAX_TEMP).toEqual(32);
  });

  it('when PS mode is on, the temp cannot be raised above 25', function() {
    for (var i = 0; i <= 4; i++) {
      thermostat.increaseTemp();
    };
    expect(function() {thermostat.increaseTemp()}).toThrow('Powersave Max temp reached');
  });

  it('when PS mode is off, the temp cannot be raised above 32', function() {
    thermostat.powerSave = false
    for (var i = 0; i <= 11; i++) {
      thermostat.increaseTemp();
    };
    expect(function() {thermostat.increaseTemp()}).toThrow('Max temp reached');
  });

});
