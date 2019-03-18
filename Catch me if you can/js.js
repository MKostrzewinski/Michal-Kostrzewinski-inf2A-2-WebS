let srodek, map, marker
let ws
let players = {}
let nick;
let ikona = "https://picsum.photos/20/20/?random"; //przypisuję randomowy awatar

    alert('Pamietaj żeby zezwolić na sprawdzenie lokalizacji!'); //informacja o prosbię o lokalizację

 nick = prompt('Podaj swój nick:', 'Nick'); // pobiera nick od gracza

    if (nick != null) {
        alert('Witaj ' + nick);
    } else {
        alert('Nie wpisałeś nicku!');
    }


function image(){                                          //ustawia awatar na wlasne zdjęcię
    let preview = document.querySelector('img');
    let file    = document.querySelector('input[type=file]').files[0];
    ikona  = new FileReader();

    ikona.onloadend = function () {
        preview.src = ikona.result;
    }

    if (file) {
        ikona.readAsDataURL(file);
    } else {
        preview.src = "https://picsum.photos/20/20/?random"; // tak dla pewności
    }
}


    function initMap() {
        srodek = { lat: 52.191, lng: 19.355 };  //ustawia parametry mapy. lokalizacja zoom itp
        map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 8,
            center: srodek,
            keyboardShortcuts: false
        });
        
        marker = new google.maps.Marker({ //ustawia parametry markera np obrazek i animacje
            position: srodek,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: ikona
        });
        getLocalization()
        startWebSocket()
        addKeyboardEvents()
    }
    
    function addKeyboardEvents() {
        window.addEventListener('keydown', poruszMarkerem)
    }
    function poruszMarkerem(ev) {
        let lat = marker.getPosition().lat()        // sterowanie
        let lng = marker.getPosition().lng()
    
        switch (ev.code) {
            case 'ArrowUp':
                lat += 0.1
                break;
            case 'ArrowDown':
                lat -= 0.1
                break;
            case 'ArrowLeft':
                lng -= 0.1
                break;
            case 'ArrowRight':
                lng += 0.1
                break;
        }
        let position = {
            lat,
            lng
        }
        let wsData = {
            lat: lat,
            lng: lng,
            id: nick
        }
        marker.setPosition(position)
        ws.send(JSON.stringify(wsData))
    }
    function startWebSocket() {
        let url = 'ws://91.121.66.175:8010'
        ws = new WebSocket(url)
        ws.addEventListener('open', onWSOpen)
        ws.addEventListener('message', onWSMessage)
    }
    
    function onWSOpen(data) {
        console.log(data)
    }
    function onWSMessage(e) {
        let data = JSON.parse(e.data)
    
        if (!players['user' + data.id]) {
            players['user' + data.id] = new google.maps.Marker({
                position: { lat: data.lat, lng: data.lng },
                map: map,
                animation: google.maps.Animation.DROP
            })
        } else {
            players['user' + data.id].setPosition({
                lat: data.lat,
                lng: data.lng
            })
        }
    }
    
    
    
    function getLocalization() {
        navigator.geolocation.getCurrentPosition(geoOk, geoFail)
    
    }
    
    function geoOk(data) {
        let coords = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
        }
        map.setCenter(coords)
        marker.setPosition(coords)
    }
    
    function geoFail(err) {
        console.log(err)
    }


