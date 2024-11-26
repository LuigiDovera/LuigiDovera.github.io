
/*
    todo
        + input filtrar estabelecimentos em alteração dom
        + label com dados do estabelecimento 
        + deixar visible e hide com cada alteração
        + adicionar marcadores de delivery 
*/

var estabelecimentos = [].concat(lagoa, marrecas, saocristovao, niteroi, saogoncalo, madureira, inhauma, taquara);

var filterValue = "";
var ifoodValue = false;
var rappiValue = false;
var ubereatsValue = false;
var vrpagueValue = false;
var deliveryValue = false;


function filterMarkers(marker){
    //compare if estabelecimento name includes Markers input
    const ifFilter = marker.estabelecimento.nomeFantasia.toLowerCase().includes(filterValue.toLowerCase());
    const ifIfood = !ifoodValue || marker.estabelecimento.flIfood;
    const ifRappi = !rappiValue || marker.estabelecimento.flRappi;
    const ifUbereats = !ubereatsValue || marker.estabelecimento.flUbereats;
    const ifVrpague = !vrpagueValue || marker.estabelecimento.flVrpague;
    const ifDelivery = !deliveryValue || marker.estabelecimento.flDelivery;
    
    marker.marker.setVisible(false);
    if (ifFilter && ifIfood && ifRappi && ifUbereats && ifVrpague && ifDelivery)
        marker.marker.setVisible(true);
        
}

function initMap() {


    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat:  -22.91249413453283, lng: -43.17785070473502},
        mapTypeId: "roadmap",
    });
  
  

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    const markers = [];
    estabelecimentos.forEach((estabelecimento) => {
        

        const marker = new google.maps.Marker({
            // The below line is equivalent to writing:
            // position: new google.maps.LatLng(-34.397, 150.644)
            position: {lat: estabelecimento.latitude, lng: estabelecimento.longitude},
            map: map,
        });

        markers.push({marker: marker, estabelecimento: estabelecimento});

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', ({ domEvent, latLng }) => {
            const endereco = "endereço: " + estabelecimento.endereco +" "+ estabelecimento.numero +" "+ estabelecimento.bairro;
            const cep = "cep: " + estabelecimento.cep;
            const telefone = "telefone: " + estabelecimento.ddd +" "+  estabelecimento.telefone;
            const content = endereco + "<br>" + cep + "<br>" + telefone;

            const { target } = domEvent;
            infoWindow.close();
            infoWindow.setHeaderContent(estabelecimento.nomeFantasia);
            infoWindow.setContent(content);
            infoWindow.open(marker.map, marker);
        });
    });

    console.log(markers);

    const filter = document.getElementById('filter');
    const ifood = document.getElementById('ifood');
    const rappi = document.getElementById('rappi');
    const ubereats = document.getElementById('ubereats');
    const vrpague = document.getElementById('vrpague');
    const delivery = document.getElementById('delivery');
    filter.addEventListener('input', (e) => {
        markers.forEach((marker) => {
            filterValue = e.target.value;
            filterMarkers(marker);
        });
    });
	ifood.addEventListener('input', (e) => {
        markers.forEach((marker) => {
            ifoodValue = e.target.checked;
            filterMarkers(marker);
        });
    });
    rappi.addEventListener('input', (e) => {
        markers.forEach((marker) => {
            rappiValue = e.target.checked;
            filterMarkers(marker);
        });
    });
    ubereats.addEventListener('input', (e) => {
        markers.forEach((marker) => {
            ubereatsValue = e.target.checked;
            filterMarkers(marker);
        });
    });
    vrpague.addEventListener('input', (e) => {
        markers.forEach((marker) => {
            vrpagueValue = e.target.checked;
            filterMarkers(marker);
        });
    });
    delivery.addEventListener('input', (e) => {
        markers.forEach((marker) => {
            deliveryValue = e.target.checked;
            filterMarkers(marker);
        });
    });








    map.addListener("click", (mapsMouseEvent) => {
        console.log(mapsMouseEvent.latLng.toJSON());
    });
}



console.log(document.getElementById('filter'));


window.initMap = initMap;
