/////////////////////////////////////////////////////////////////////
function initMap() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
     center: new google.maps.LatLng(43.450101, -87.222019),
     zoom: 7,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }
    var map = new google.maps.Map(mapCanvas, mapOptions)

  }
    google.maps.event.addDomListener(window, 'load', initMap);


    function initMap() {
      var myLatLng = {lat: 43.787, lng: -86.531};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: myLatLng
      });

        var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    }





//////BELOW FETCH DATA /////////////////////////////////////////////


// app.mark = {
//   type: 'GET',
//   url: '/api/ships',
//   dataType: 'json',
//   success: function(data){
//     for (i=0; i < data.length; i++) {
//       app.latLong = new Object();
//       app.latLong = {
//         latitude: parseFloat(data[i].latitude),
//         longitude: parseFloat(data[i].longitude)
//       };
//     }
//   }
// }
//
// $.ajax(app.mark);

///////////////////////////////////////////////////////////////////////
