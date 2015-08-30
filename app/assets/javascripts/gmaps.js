/////////////////////////////////////////////////////////////////////
function initMap() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
     center: new google.maps.LatLng(43.450101, -87.222019),
     zoom: 7,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    // 
    // var marker = new google.maps.Marker({
    //   position: {lat: 43.45101, lng: -87.222019},
    //   map: mapOptions,
    //   title: 'Lake Michigan'
    // })
  }
    google.maps.event.addDomListener(window, 'load', initMap);




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
