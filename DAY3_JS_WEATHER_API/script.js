let lastUpdateTime = new Date();
let now = new Date();

renderData();

function refresh() {
    lastUpdateTime = new Date()
    renderData()
}

function getCurrentTime() {
    now = new Date()
}
setInterval(getCurrentTime, 100)

function getTimeDiff() {
    let diffMs = (now - lastUpdateTime);
    return Math.round(((diffMs % 86400000) % 3600000) / 60000);
}

async function getData() {
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/prague?unitGroup=us&key=NFB97LW282QC7PP7VX5K8GLY5&contentType=json";
    let res = await fetch(url);
    return await res.json();
}

async function renderData() {
    let weather = await getData();

    document.getElementById("address").innerText = weather.address
    document.getElementById("resolvedAddress").innerText = weather.resolvedAddress
    document.getElementById("description").innerText = weather.description
    document.getElementById("temp").innerText = "Temperature:  " + fToC(weather.currentConditions.temp).toFixed(0) + "°C"
    document.getElementById("feelslike").innerText = "Feels like:  " + fToC(weather.currentConditions.feelslike).toFixed(0) + "°C"
    document.getElementById("humidity").innerText = "Humidity:  " + weather.currentConditions.humidity + "%"
    document.getElementById("pressure").innerText = "Pressure:  " + weather.currentConditions.pressure + "hPa"
    document.getElementById("uvindex").innerText = "UV Index:  " + weather.currentConditions.uvindex

}
function displayLastTimeUpdate(){
    document.getElementById("m").innerText = " Last update " + getTimeDiff().toString() + " minutes ago"
}
setInterval(displayLastTimeUpdate,1000)

setInterval(refresh, 300000)

function fToC(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}