// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 2;
let path = "../Data/important-vessels.csv";
let redmarkers = L.featureGroup();
let orangemarkers = L.featureGroup();
let bluemarkers = L.featureGroup();
let yellowmarkers = L.featureGroup();
let greenmarkers = L.featureGroup();
let violetmarkers = L.featureGroup();


// initialize
$(document).ready(function () {
    createMap(lat, lon, zl);
    readCSV(path);
});

// create the map
function createMap(lat, lon, zl) {
    map = L.map('map', {
        preferCanvas: true,
        zoomDelta: .5
    }).setView([lat, lon], zl);

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
           // console.log(data);
            // map the data
            mapCSV(data);
        }
    });
}

function mapCSV(data) {
    // loop through each entry
    data.data.forEach(function (item, index) {
        // sort colors
        switch (item.col) {

            case 'red':
                // create marker
                let r = L.circleMarker([item.lat, item.lon], { color: item.col, radius: .25 });
                // add marker to featuregroup
                redmarkers.addLayer(r);
                break;

            case 'blue':
                let b = L.circleMarker([item.lat, item.lon], { color: item.col, radius: .25 });
                bluemarkers.addLayer(b);
                break;

            case 'green':
                let g = L.circleMarker([item.lat, item.lon], { color: item.col, radius: .25 });
                greenmarkers.addLayer(g);
                break;

            case 'yellow':
                let y = L.circleMarker([item.lat, item.lon], { color: item.col, radius: .25 });
                yellowmarkers.addLayer(y);
                break;

            case 'violet':
                let v = L.circleMarker([item.lat, item.lon], { color: item.col, radius: .25 });
                violetmarkers.addLayer(v);
                break;

            case 'orange':
                let o = L.circleMarker([item.lat, item.lon], { color: item.col, radius: .25 });
                orangemarkers.addLayer(o);
                break;
            default:
                console.log("didnt work");
        }
    })

    // add featuregroup to map
    redmarkers.addTo(map)
    orangemarkers.addTo(map)
    yellowmarkers.addTo(map)
    greenmarkers.addTo(map)
    bluemarkers.addTo(map)
    violetmarkers.addTo(map)
}
