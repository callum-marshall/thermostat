$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#currentTemp').text(thermostat.currentTemp);
})
