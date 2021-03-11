var request = new XMLHttpRequest();
request.open('GET', 'http://jsoneditoronline.org/#left=local.taqedu&right=local.wibubo', 'true');
request.onload = function() {
    
    //Accessing JSON data below
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((openweatherapp) => {
            console.log(openweatherapp.weather);
        })
    } else {
        const errorMessage = document.createElement('error');
        errorMessage.textContent = 'Ahh! No data found';
        app.appendChild(errorMessage);
    }
}

request.send();