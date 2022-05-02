var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var windspeed = document.querySelector('.windspeed');
var sunrise = document.querySelector('.sunrise');
var sunset = document.querySelector('.sunset');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var pressureValue = data['main']['pressure'];
            var humidityValue = data['main']['humidity'];
            var windspeedValue = data['wind']['speed'];
            var sunriseValue = data['sys']['sunrise'];
            var sunsetValue = data['sys']['sunset'];

            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue + " K";
            pressure.innerHTML = "Pressure - " + pressureValue + " hPa";
            humidity.innerHTML = "Humidity - " + humidityValue + " %";
            windspeed.innerHTML = "Windspeed - " + windspeedValue + " meter/sec";
            sunrise.innerHTML = "Sunrise - " + sunriseValue;
            sunset.innerHTML = "Sunset - " + sunsetValue;
            input.value = "";

        })


})