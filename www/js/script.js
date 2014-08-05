// When Geolocation works
function onSuccess (position) {
    document.getElementById('speed').innerHTML = Math.round(position.coords.speed * 3.6);
    document.getElementById('accuracy').innerHTML = position.coords.accuracy;
    document.getElementById('lat').innerHTML = position.coords.latitude;
    document.getElementById('long').innerHTML = position.coords.longitude;
    document.getElementById('alti').innerHTML = position.coords.altitude;
}

// When Geolocation doesn't work
function onError (error) {
    alert('ERROR(' + error.code + '): ' + error.message);
}

var options = {
    enableHighAccuracy: true,
    maximumAge        : 15000,
    timeout           : 30000
};
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);


function night () {     // Toggle text and background colour. White on black or black on white.
    var body = document.getElementById('body');

    if (body.style.backgroundColor == 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}

function carHud () {       // Creates a mirror image of the speed. This can create a HUD when phone is laid on dashboard.
    var hud = document.getElementById('hud');

    if (hud.style.webkitTransform == 'scale(-1, 1)') {
        hud.style.webkitTransform = 'scale(1, 1)';
    } else {
        hud.style.webkitTransform = 'scale(-1, 1)';
    }
}

function toggleInfo () {
    var infoDiv = document.getElementById('info');

    if (infoDiv.style.visibility == 'hidden') {
        infoDiv.style.visibility = 'visible';
    } else {
        infoDiv.style.visibility = 'hidden';
    }
}
