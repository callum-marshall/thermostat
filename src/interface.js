$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#currentTemp').text(thermostat.currentTemp);

  $('#increaseTemp').on('click', function() {
    thermostat.increaseTemp();
    updateTemperature();
  })

  $('#decreaseTemp').on('click', function() {
    thermostat.decreaseTemp();
    updateTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powerSaveSwitch').on('click', function() {
    thermostat.powerSaveSwitch();
    $('#powerSaveStatus').text(thermostat.powerSaveStatus());
    updateTemperature();
  })

  function updateTemperature() {
    $('#currentTemp').text(thermostat.currentTemp);
  };

})
