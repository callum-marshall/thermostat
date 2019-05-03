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

  it('can be reset to the default temperature', function() {
    thermostat.increaseTemp();
    thermostat.reset();
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT_TEMP)
  });

  describe('print usage', function() {
    it('returns low usage when temp is under 18', function() {
      thermostat.currentTemp = 17;
      expect(thermostat.printUsage()).toEqual("Low Usage");
    });

    it('returns medium usage when temp is under 25', function() {
      thermostat.currentTemp = 21;
      expect(thermostat.printUsage()).toEqual("Medium Usage");
    });

    it('returns high usage when temp is 25 and over', function() {
      thermostat.currentTemp = 25;
      expect(thermostat.printUsage()).toEqual("High Usage");
    });

  });

  describe('powerSaveSwitch', function() {
    it('switches powerSave on when off', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toBe(true);
    });

    it('switches powerSave off when on', function() {
      thermostat.powerSave = true;
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toBe(false);
    });

  });

  describe('#powerSaveStatus', function() {
    it('changes to "OFF" when false', function() {
      thermostat.powerSave = true;
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSaveStatus()).toEqual("(OFF)")
    });

    it('changes to "ON" when true', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSaveStatus()).toEqual("(ON)")
    });
  });

});
