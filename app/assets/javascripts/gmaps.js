function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
     center: new google.maps.LatLng(43.450101, -87.222019),
     zoom: 7,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    }
    google.maps.event.addDomListener(window, 'load', initialize);
