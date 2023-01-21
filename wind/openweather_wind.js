document.addEventListener("DOMContentLoaded", function() {
 // your JavaScript code here
 // Get the latitude and longitude input fields and the submit button
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const submitButton = document.getElementById("submit-button");

// Add an event listener to the submit button to make the API call when the form is submitted
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const latitude = latitudeInput.value;
  const longitude = longitudeInput.value;
  const apiKey = "75f4694d5be7367d385d68f2bb50aca4";
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  // Make the API call
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.current && data.current.wind_speed && data.current.wind_deg) {
        const windSpeed = data.current.wind_speed;
        const windDeg = data.current.wind_deg;
        document.getElementById("wind-info").innerHTML = `Wind Speed: ${windSpeed}m/s, Wind Deg: ${windDeg}°`;
      } else {
        console.log("Data Error: The wind information is not available.");
      }
    })
    .catch(function(error) {
      console.log("Error: ", error);
    });
});
});