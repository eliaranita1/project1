// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 10;
let path = '';
let markers = L.featureGroup();

let geojsonPath = '../Data/final_data.json';
let geojson_data;
let geojson_layer;
let zoomdata = [];
let values = [];

let brew = new classyBrew();
let legend = L.control({ position: 'bottomright' });
let info_panel = L.control();

let fieldtomap = 'plastic_waste_2010';



// initialize
$(document).ready(function () {
    createMap(lat, lon, zl);
    getGeoJSON();
    //readCSV(path);
});

// create the map
function createMap(lat, lon, zl) {
    map = L.map('map').setView([lat, lon], zl);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// function to read csv data
// function readCSV(path){
// 	Papa.parse(path, {
// 		header: true,
// 		download: true,
// 		complete: function(csvdata) {
// 			console.log(csvdata);

// 			// map the csvdata
// 			mapCSV(csvdata);
// 		}
// 	});
// }

// function to get the geojson data
function getGeoJSON() {

    $.getJSON(geojsonPath, function (data) {
        console.log(data)

        // put the data in a global variable
        geojson_data = data;

        // call the map function
        mapGeoJSON(fieldtomap, 7, 'Reds') // add a field to be used
    })
}

function mapGeoJSON(field, num_classes, color, scheme) {

    // clear layers in case it has been mapped already
    if (geojson_layer) {
        geojson_layer.clearLayers()
    }

    // globalize the field to map
    fieldtomap = field;

    // create an empty array

    // based on the provided field, enter each value into the array
    geojson_data.features.forEach(function (item, index) {
        if ((item.properties[field] != undefined)) {
            values.push(item.properties[field])
        }
    })

    // set up the "brew" options
    brew.setSeries(values);
    brew.setNumClasses(num_classes);
    brew.setColorCode(color);
    brew.classify(scheme);

    // create the layer and add to map
    geojson_layer = L.geoJson(geojson_data, {
        style: getStyle, //call a function to style each feature
        onEachFeature: onEachFeature // actions on each feature
    }).addTo(map);
    console.log(geojson_layer)
    console.log(geojson_layer.getBounds())
    map.fitBounds(geojson_layer.getBounds())

    // create the legend
    createLegend();

    // create the infopanel
    createInfoPanel();

    // create table
    createTable();
}

function getStyle(feature) {
    return {
        stroke: true,
        color: 'white',
        weight: 1,
        fill: true,
        fillColor: brew.getColorInRange(feature.properties[fieldtomap]),
        fillOpacity: 0.8
    }
}

function createLegend() {
    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            breaks = brew.getBreaks(),
            labels = [],
            from, to;

        for (var i = 0; i < breaks.length; i++) {
            from = breaks[i];
            to = breaks[i + 1];
            if (to) {
                labels.push(
                    '<i style="background:' + brew.getColorInRange(to) + '"></i> ' +
                    from.toFixed(0) + ' &ndash; ' + to.toFixed(0));
            }
        }

        div.innerHTML = labels.join('<br>');
        return div;
    };

    legend.addTo(map);
}

function createInfoPanel() {

    info_panel.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info_panel.update = function (properties) {
        // if feature is highlighted
        if (properties) {
            this._div.innerHTML = `<b>${properties['country']}</b><br>${fieldtomap}: ${properties[fieldtomap]}`;
        }
        // if feature is not highlighted
        else {
            this._div.innerHTML = 'Hover over a country';
        }
    };

    info_panel.addTo(map);
}

// Function that defines what will happen on user interactions with each feature
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// on mouse over, highlight the feature
function highlightFeature(e) {
    var layer = e.target;

    // style to use on mouse over
    layer.setStyle({
        weight: 2,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info_panel.update(layer.feature.properties);

    createDashboard(layer.feature.properties);

}

// on mouse out, reset the style, otherwise, it will remain highlighted
function resetHighlight(e) {
    geojson_layer.resetStyle(e.target);
    info_panel.update() // resets infopanel
}

// on mouse click on a feature, zoom in to it
function zoomToFeature(e) {
    console.log(e.target)
    console.log(e.target.getBounds())
    map.fitBounds(e.target.getBounds());
}

function createDashboard(properties) {

    // clear dashboard
    $('.dashboard').empty();

    //console.log(properties)

    // chart title
    let title = 'Gross Domestic Product (GDP) & Population in ' + properties['country'];

    // data values
    let data = [
        properties['gdp_md_est'],
        properties['plastic_waste_2010']
    ]

    // data fields
    let fields = [
        'GDP Estimate (2010)',
        'Total Mismanaged Plastic Waste',
    ]

    // chart options
    var options = {
        chart: {
            type: 'bar',
            height: 300,
            width: '100%',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        title: {
            text: title
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        series: [
            {
                data: data
            }
        ],
        xaxis: {
            categories: fields
        }
    }

    var options2 = {
        chart: {
            type: 'pie',
            height: 300,
            width: '100%',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 700,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        title: {
            text: 'Gross Domestic Product (GDP) in: ' + properties['country'],
        },
        series: data,
        labels: fields,
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    };

    var chart = new ApexCharts(document.querySelector('.dashboard'), options)
    chart.render()

}

function createTable() {

    let datafortable = [
    ];

    geojson_data.features.forEach(function (item) {
        datafortable.push(item.properties)
        zoomdata.push(item.geometry)
    })
    console.log(zoomdata)

    let fields = [
        { name: "country", type: "text" },
        { name: 'waste_per_person_rank', type: 'number' },
        { name: 'gdp_md_est', type: 'number' },
        { name: fieldtomap, type: 'number' },
        { name: 'plastic_rank', type: 'number' },
        
    ]

    $(".sidebar").jsGrid({
        width: "100%",
        height: "100%",
        heading: true,
        editing: true,
        sorting: true,
        paging: false,
        autoload: false,

        pageSize: 10,
        pageButtonCount: 5,

        data: datafortable,
        fields: fields,
        rowClick: function (datafortable) {

            zoomTo(datafortable.item.waste_per_person_rank)
        },
    });
}

function zoomTo(e) {
console.log(e);

console.log(geojson_layer._layers)
map.fitBounds(geojson_layer.getLayers()[e-1].getBounds());

}