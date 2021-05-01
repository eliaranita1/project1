// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
let path = "#";
let markers = L.featureGroup();


// initialize
$(document).ready(function () {
    createMap(lat, lon, zl);
    readCSV(path);
});

// create the map
function createMap(lat, lon, zl) {
    map = L.map('map').setView([lat, lon], zl);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// function to read csv data
function readCSV(path) {
    Papa.parse(path, {
        header: true,
        Worker: true,
        download: true,
        complete: function (data) {
            console.log(data);

            // map the data
            mapCSV(data);
        }
    });
}

function mapCSV(data) {

    // circle options
    let circleOptions = {
        radius: 5,
        weight: 1,
        color: 'white',
        fillColor: 'dodgerblue',
        fillOpacity: 1
    }


    // loop through each entry
    data.data.forEach(function (item, index) {

        var popup = L.responsivePopup().setContent(`${item.Title}<br><img src="${item.imageurl}" onmouseover="panToImage(${index})" style = "max-width: 100%"
    style = "height: auto">`);
        // create marker
        let marker = L.circleMarker([item.latitude, item.longitude], circleOptions)
            .on('mouseover', function () {
                this.bindPopup(popup).openPopup()
            })
        // add marker to featuregroup		
        markers.addLayer(marker)

        $('.sidebar').append(`${item.Title}<br><img src="${item.imageurl}" onmouseover="panToImage(${index})" style = "max-width: 100%"
            style = "height: auto">`)
    })

    // add featuregroup to map
    markers.addTo(map)

    // fit markers to map
    map.fitBounds(markers.getBounds())
}

function panToImage(index) {
    // zoom to level 14 first
    map.setZoom(14);
    // pan to the marker
    map.panTo(markers.getLayers()[index]._latlng);
}
