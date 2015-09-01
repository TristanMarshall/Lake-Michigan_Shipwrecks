// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree .

////////////ajaxsetup should never be inside document.ready/////////////////////

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('Authorization', 'Token token=' + global.apiKey)
  }
});


//////////////////////////Namespaces for Maps///////////////////////////////////

  var app = app || {};
  app.allShips = [];


$(document).ready(function(){

//////////////////////////jQuery Animations/////////////////////////////////////

$(".mainLogo").fadeIn(1500);
$(".button").fadeIn(1500);
$(".headerPhoto").fadeIn(2000);
$(".headLine").fadeIn(2000);

$('.objs').hide();
// $('.bold1').on('click', function() {
//     $('.bold').show();
// });

///////////////////iterate through data/ make array of objects//////////////////

app.mark = {
  type: 'GET',
  url: '/api/ships',
  dataType: 'json',
  success: function(data){
    for (i=0; i < data.length; i++) {
      app.ship = new Object();
      app.ship = {
        lat: parseFloat(data[i].latitude),
        lng: parseFloat(data[i].longitude),
        name: data[i].name,
        description: data[i].description,
        yearlost: data[i].yearlost
      };
      app.allShips.push(app.ship);
    }
  }
}
$.ajax(app.mark);
//


///////////////////////////Google Map///////////////////////////////////////////

function initMap() {
  app.markers = [];
  var myLatLng = {lat: 43.787, lng: -86.531};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatLng
  });


  for (var i = 0; i < app.allShips.length; i++) {

    var coordinates = app.allShips[i];
    var tempMarker = new google.maps.Marker({
      position: coordinates,
      map: map,
      coordinateData: app.allShips[i]
    });
    app.markers.push(tempMarker);

}

for (var item in app.markers) {
  var tempMarker = app.markers[item];
  console.log(app.markers[item].coordinateData);

  tempMarker.addListener('click', function() {
    $('.shipName').html("");
    $('.shipName').append(this.coordinateData.name);
    $('.shipDesc').html("");
    $('.shipDesc').append(this.coordinateData.description);
    $('.shipDesc2').html("");
    $('.shipDesc2').append(this.coordinateData.yearlost);
  });

}

}


google.maps.event.addDomListener(window, 'load', initMap);

////////////////////////////////////////////////////////////////////////////////
///end of document.ready
});
