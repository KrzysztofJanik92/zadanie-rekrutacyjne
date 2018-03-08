function initMap() {
    //buttony
    const warsaw = document.getElementById('warsaw');
    const gdansk = document.getElementById('gdansk');
    const wroclaw = document.getElementById('wroclaw');

    //opcje
    const options = {
        zoom: 5,
        center: {lat: 51.250, lng: 22.566}
    }

    //mapa
    const map = new google.maps.Map(document.getElementById('map'), options);

    //markery
    const Warszawa = new google.maps.Marker({
        position: {lat: 52.229, lng: 21.011},
        map: map
    });
    const Wroclaw = new google.maps.Marker({
        position: {lat: 51.100, lng: 17.033},
        map: map
    });
    const Gdansk = new google.maps.Marker({
        position: {lat: 54.352, lng: 18.646},
        map: map
    })

    const markerPosition = function(id, position) {
        id.addEventListener('click', function() {
            map.setCenter(position.getPosition());
        })
    }

    const buttonPosition = function(position) {
        position.addListener('click', function() {
            map.setCenter(position.getPosition());
        })
    }

    markerPosition(warsaw, Warszawa);
    markerPosition(gdansk, Gdansk);
    markerPosition(wroclaw, Wroclaw);
    buttonPosition(Warszawa);
    buttonPosition(Gdansk);
    buttonPosition(Wroclaw);
}