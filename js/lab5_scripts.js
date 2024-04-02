// start of accordion
const acc = document.querySelectorAll(".accordion");

acc.forEach(item => {
  item.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    } 
  });
});
// end of accordion

// start of footer date
document.getElementById('year').innerHTML = new Date().getFullYear();
// end of footer date

// start of api search
const searchWeather = async () => {
  const locationInput = document.getElementById("locationInput").value;
  const apiKey = "c4501fe9228346ce9a350256240204"; // 
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

const displayWeather = (data) => {
  const weatherInfo = document.getElementById("weatherInfo");
  if (data.error) {
    weatherInfo.innerHTML = `<p>${data.error.message}</p>`;
  } else {
    weatherInfo.innerHTML = `<div class="weather-container">
                                <h3>Current Weather in ${data.location.name}, ${data.location.country}</h3>
                                <p>Temperature: ${data.current.temp_c}°C</p>
                                <p>Weather Condition: ${data.current.condition.text}</p>
                                <p>Humidity: ${data.current.humidity}%</p>
                                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
                            </div>`;
  }
};
// end of api search