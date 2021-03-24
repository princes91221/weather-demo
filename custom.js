const button = document.querySelector('.btn-primary');
button.onclick = function() {
    const inputValue = document.querySelector('.search-input').value;
    console.log('Your entered location : ',inputValue,'.');



    
    // Current Day
    const currentDay = document.querySelector('#day');
    currentDay.innerHTML = 'Today';
    // Current Date
    const currentDate = document.querySelector('#date');
    currentDate.innerHTML = '24 March 2021, Thursday';
    // Current Location
    const currentLocation = document.querySelector('#location');
    currentLocation.innerHTML = 'Thane';
    // Current Temperature
    const currentTemperature = document.querySelector('#temperature');
    currentTemperature.innerHTML = '28&deg; C';
    // Perception
    const currentPerception = document.querySelector('#perception');
    currentPerception.innerHTML = 'Perception : 15%';
    // Wind
    const currentWind = document.querySelector('#wind');
    currentWind.innerHTML = 'Wind : 10 km/h';
    // Humidity
    const currentHumidity = document.querySelector('#humidity');
    currentHumidity.innerHTML = 'Humidity : 10%';
    // // Day 1
    // const currentDay1 = document.querySelector('#day-1');
    // currentDay1.innerHTML = 'Fri 25';
    // // Temperature Day 1
    // const currentTemperature1 = document.querySelector('#temperature-1');
    // currentTemperature1.innerHTML = '24&deg; C / 36&deg; C';
    // // Day 2
    // const currentDay2 = document.querySelector('#day-2');
    // currentDay2.innerHTML = 'Sat 26';
    // // Temperature Day 2
    // const currentTemperature2 = document.querySelector('#temperature-2');
    // currentTemperature2.innerHTML = '25&deg; C / 35&deg; C';
    // // Day 3
    // const currentDay3 = document.querySelector('#day-3');
    // currentDay3.innerHTML = 'Sun 27';
    // // Temperature Day 3
    // const currentTemperature3 = document.querySelector('#temperature-3');
    // currentTemperature3.innerHTML = '26&deg; C / 34&deg; C';
    // // Day 4
    // const currentDay4 = document.querySelector('#day-4');
    // currentDay4.innerHTML = 'Mon 28';
    // // Temperature Day 4
    // const currentTemperature4 = document.querySelector('#temperature-4');
    // currentTemperature4.innerHTML = '22&deg; C / 34&deg; C';
    // // Day 5
    // const currentDay5 = document.querySelector('#day-5');
    // currentDay5.innerHTML = 'Tue 29';
    // // Temperature Day 5
    // const currentTemperature5 = document.querySelector('#temperature-5');
    // currentTemperature5.innerHTML = '25&deg; C / 35&deg; C';
}
