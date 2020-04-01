const api = {
    key: '6cee55f02ca3926613c0c9426c93d16b',
    url: 'https://api.openweathermap.org/data/2.5/'

}

let search = document.querySelector('.search');
search.addEventListener('keypress', setInform);

function setInform(event){
    if(event.keyCode == 13){
        getResults(search.value);
        console.log(search.value);
    }
}

function getResults(request){
    fetch(`${api.url}weather?q=${request}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json())
    .then(displayResults);
}

function displayResults(weather){
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = getDate(now);


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;<span>C</span>`;

    let other = document.querySelector('.current .weather');
    other.innerHTML = `${weather.weather[0].main}`;

    let min_max = document.querySelector('.current .min-max');
    min_max.innerHTML = `${Math.round(weather.main.temp_min)}&deg;C / ${Math.round(weather.main.temp_max)}&deg;C`;

}

function getDate(now){
    let months = ["January", "February", 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}