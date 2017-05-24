(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "66ec7fca7bbbcd97ba043d811c61c06da34b7eb75a580495390ee8cd317dbe29";

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../.env":1}]},{},[2]);
