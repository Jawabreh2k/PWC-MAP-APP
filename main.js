// Get the form element and the city input field
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city");

// Define a function that creates a new Google Map
function createMap(latitude, longitude) {
  // Create the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude }, // Set the center of the map to the specified latitude and longitude
    zoom: 10, // Set the zoom level to 10
  });
}
// Call the createMap function with the coordinates for Dubai when the page loads
window.onload = () => createMap(25.2744, 55.3047);

// Add an event listener to the form element that listens for the submit event
form.addEventListener("submit", (event) => {
  // Prevent the default action (refresh the page)
  event.preventDefault();

  // Get the city name from the city input field
  const city = cityInput.value;

  // Replace YOUR_API_KEY with your actual Geocoding API key
  const apiKey = "AIzaSyBWmOXJdZaTXF38vOLOfVK6FQS4xQ6deGM";
  // Set the API URL with the city name and API key
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${city}`;

  // Send a request to the Geocoding API
  fetch(apiUrl)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // If the API returns any results
      if (data.results.length > 0) {
        // Get the latitude and longitude from the first result
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;

        // Call the createMap function with the latitude and longitude
        createMap(latitude, longitude);
      } else {
        // If the API doesn't return any results, Alert an error message
        alert("No results found");
      }
    })
    .catch((error) => {
      // If there is an error, log the error message
      console.error(error);
    });
});

//api key
//AIzaSyBWmOXJdZaTXF38vOLOfVK6FQS4xQ6deGM
