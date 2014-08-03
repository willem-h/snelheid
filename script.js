var options = {
    enableHighAccuracy: true,
    maximumAge        : 15000,
    timeout           : 10000
};

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(function(position){
        document.getElementById('speed').innerHTML = Math.round(position.coords.speed * 3.6);
        document.getElementById('accuracy').innerHTML = position.coords.accuracy;
        document.getElementById('lat').innerHTML = position.coords.latitude;
        document.getElementById('long').innerHTML = position.coords.longitude;
        document.getElementById('alti').innerHTML = position.coords.altitude;
    }, error, options);
} else {
    alert("Geolocation isn't available");
}

function error (error) {
    alert('ERROR(' + error.code + '): ' + error.message);
}

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

function hud () {       // Creates a mirror image of the speed. This can create a HUD when phone is laid on dashboard.
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
