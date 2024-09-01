document.getElementById("get-weather").addEventListener("click", function() {
    const city = document.getElementById('city-input').value;
   const apikey ="3543877f17a902759c0791d5808b1b97";// OpenWeatherMap API Key
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            
            const now = new Date();
            const localeDateString = now.toLocaleDateString();
            const localeTimeString = now.toLocaleTimeString();
            console.log(localeDateString, localeTimeString);


            document.getElementById("date").textContent = `Date/Time: ${now}`;
            document.getElementById("location").textContent = `Location: ${location}`;
            document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
            document.getElementById("description").textContent = `Description: ${description}`;
        })
        .catch(error => {
            document.getElementById("date").textContent = '';
            document.getElementById("location").textContent = '';
            document.getElementById("temperature").textContent = '';
            document.getElementById("description").textContent = `Error: ${error.message}`;
        });
});
