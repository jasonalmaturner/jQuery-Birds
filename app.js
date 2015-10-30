$(document).ready(function() {

  $('#clickMe').on('click', function(e) {
    e.preventDefault();
    var val = $('#myInput').val();
    var myNewElem = '<li class="click-click"></li>';
    var myNewElem = $(myNewElem).text(val);
    $('.items').append(myNewElem);
  });

  $('.myData').on('click', '.click-click', function(e) {
    e.preventDefault();
    console.log($(this).text());
    alert('something');
  });

  $('#getBirds').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'http://bird-api.com/api/birds?order=passeriformes&familyName=icteridae'
    }).then(function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        $('.birds').append('<li>' + data[i].commonName + '</li>');
      }
    });
  });

  $('#submitBird').on('click', function(e) {
    var commonName = $('#commonName').val();
    var sciName = $('#sciName').val();
    console.log(commonName, sciName);
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://bird-api.com/api/birds',
      data: {
        commonName: commonName,
        scientificName: sciName
      },
    }).then(function(data) {
      console.log(data);
    }, function(err) {
      console.log(err);
    });
  });

});
