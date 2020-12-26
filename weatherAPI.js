const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Upington&units=metric&appid=655529df795a674114f7b77d422adce8`

fetch(weatherApiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( weather => generateWeatherHtml(weather))
    .catch( error => console.error('Error:', error))


const generateWeatherHtml = (data) => {
    const html = `
        <img src="images/UpingtonMap.png" alt="Upington Map">
        <div class="city">${data.name}</div>
        <div class="temp_max">Temperatures oftentimes exceed 40°C</div>
        <div class="temp">Current Temp: ${data.main.temp} °C</div>
    `
    const weatherDiv = document.querySelector('.weather')
    weatherDiv.innerHTML = html}
