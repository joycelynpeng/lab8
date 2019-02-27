function initMap() {
	// add your code here
  L.mapquest.key = 'LTFOVWnwArW95wejB05qylAQjf9b2TkY';

  // 'map' refers to a <div> element with the ID mapQuest
  var map = L.mapquest.map('map',{
    center: [32.8788, -117.2359],
    layers: L.mapquest.tileLayer('map'),
    zoom: 14,
    zoomControl: false
  });

  // Add a marker to the map
  L.marker([32.8788, -117.2359]).addTo(map);
}
