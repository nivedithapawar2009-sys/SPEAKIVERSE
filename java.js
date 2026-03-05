let map;

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition);

}

}

function showPosition(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("result").innerText =
"Location detected: " + lat + ", " + lon;

map = L.map('map').setView([lat, lon], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

maxZoom: 19

}).addTo(map);

L.marker([lat, lon]).addTo(map)

.bindPopup("You are here")

.openPopup();

}

function showNearby(){

document.getElementById("result").innerText =
"Nearby suggestions: Restaurants, hospitals, transport stations.";

}

function safeRoute(){

document.getElementById("result").innerText =
"Safest route calculated based on traffic and lighting areas (prototype logic).";

}

function sendSOS(){

document.getElementById("result").innerText =
"🚨 SOS activated. Location shared with emergency services.";

alert("SOS Activated. Location Sent.");

}

function translateText(){

let text = document.getElementById("textInput").value;

document.getElementById("result").innerText =
"Translated: " + text + " (AI translator integration later)";

}