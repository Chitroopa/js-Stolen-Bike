var apiKey = require('./../.env').apiKey;

$('document').ready(function(){
  $('.form1').submit(function(event){
    event.preventDefault();
    var city = $('#city-name').val();
    $('#city-name').val("");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location='+ city +'&distance=10&stolenness=proximity&appid=' + apiKey ,function(response) {
      for(var i=0; i<25; i++) {
        console.log('hi');
        $('#output').append('<h3>Bike id:'+ response.bikes[i].id + '</h3>');
        $('#output').append('<p>Title:'+ response.bikes[i].title + '</p>');
        $('#output').append('<p>Serial:'+ response.bikes[i].serial + '</p>');
        $('#output').append('<p>Serial:'+ (new Date(response.bikes[i].date_stolen * 1000).toLocaleDateString()) + '</p>');
        $('#output').append('<img src="'+ response.bikes[i].thumb + '"</img>');
      }
    });
  });
});
