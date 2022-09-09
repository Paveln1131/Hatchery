let lastUpdateTime = new Date();
let now = new Date();

renderData();

function refresh(){
    lastUpdateTime = new Date()
    renderData()
}
function getCurrentTime(){
    now = new Date()
}
setInterval(getCurrentTime,100)

function getTimeDiff(){
    let diffMs = (now - lastUpdateTime);
    //diffMins
    return Math.round(((diffMs % 86400000) % 3600000) / 60000);
}

async function getData() {
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/prague?unitGroup=us&key=NFB97LW282QC7PP7VX5K8GLY5&contentType=json";
        let res = await fetch(url);
        return await res.json();
}

async function renderData() {
    let weather = await getData();

    let html = '';
    let htmlSegment = `<div class="display">
                           <h1>${weather.address}</h1>
                           <p>${weather.resolvedAddress}</p>
                           <h2>${weather.description}</h2>
                           <ul>
                           <li>Temperature:  ${fToC(weather.currentConditions.temp).toFixed(0)}°C</li>
                           <li>Feels like:  ${fToC(weather.currentConditions.feelslike).toFixed(0)}°C</li>
                           <li>Humidity:  ${weather.currentConditions.humidity}%</li>
                           <li>Pressure:  ${weather.currentConditions.pressure}hPa</li>
                           <li>UV Index:  ${weather.currentConditions.uvindex}</li>
                           <li><input id="btn" type="button" value="Refresh" onclick="refresh()">Last update ${getTimeDiff()}mins ago</li>
                           </ul>
                       </div>`;

    html += htmlSegment;
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
setInterval(renderData(),300000)
setInterval(renderData(),60000)

function fToC(fahrenheit)
{
    return (fahrenheit - 32) * 5 / 9;
}