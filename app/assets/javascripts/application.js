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








//ajaxsetup should never be inside document.ready
$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('Authorization', 'Token token=' + global.apiKey)
  }
})

$(document).ready(function(){
  $(".mainLogo").fadeIn(1500);
  $(".button").fadeIn(1500);
  $(".headerPhoto").fadeIn(2000);
  $(".headLine").fadeIn(2000);
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://localhost:3000/api/ships',
  //   dataType: 'json',
  //   success: function(data){
  //     console.log(data);
  //   },
  //   error: function(err){
  //     console.log(err);
  //   }
  // })

});
