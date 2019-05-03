$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#currentTemp').text(thermostat.currentTemp);

  $('#increaseTemp').on('click', function() {
    thermostat.increaseTemp();
    $('#currentTemp').text(thermostat.currentTemp);
  })

  $('#decreaseTemp').on('click', function() {
    thermostat.decreaseTemp();
    $('#currentTemp').text(thermostat.currentTemp);
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    $('#currentTemp').text(thermostat.currentTemp);
  })

  $('#powerSaveSwitch').on('click', function() {
    thermostat.powerSaveSwitch();
    $('#powerSaveStatus').text(thermostat.powerSaveStatus());
  })

})
