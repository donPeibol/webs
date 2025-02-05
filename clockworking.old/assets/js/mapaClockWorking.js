/* Google Map con chinchetas */

var locations = [
  ['<h1 class="TituloMapa">ClockWorking</h1> <p>Reparación de Ordenadores, Diseño Web y CoWorking</p></br>', 40.40237, -3.6882699999999886, 1]
  ];

var mapaClockWorking = new google.maps.Map(document.getElementById('mapaClockWorking'), {
  zoom: 15,
  center: new google.maps.LatLng(40.407531, -3.695456400000012),
	scrollwheel: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var i = 0;
var marker;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: mapaClockWorking,
    animation:google.maps.Animation.BOUNCE,
    icon:'assets/img/clock_sm.png'
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(mapaMadrid, marker);
    };
  })(marker, i));
};
