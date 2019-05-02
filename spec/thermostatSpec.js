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

});
