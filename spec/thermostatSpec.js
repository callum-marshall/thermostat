'use strict';

describe('thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.DEFAULT_TEMP).toEqual(20);
  });

});
